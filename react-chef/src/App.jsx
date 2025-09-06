import { useRef, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import { FaCheckSquare } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { getRecipe } from "./services/ia";
import ReactMarkdown from "react-markdown";

function App() {
  const [ingredient, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState();
  const [disableBottom, setDisableBottom] = useState(false);
  const toastId = useRef(null);

  function handleWarm() {
    //prevenir de aparecer varios alarm se o usuario
    //clicar mais de uma vez
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error("Erro, tente novamente!",
        { theme:"dark"}
      );
    }
  }

  async function handleRecipe(ing) {
    try {
      setRecipe()
      setDisableBottom(true);
      toast.loading("Iniciando busca por uma receita :D", {
        position: "top-center",
        theme: "light",
      });
      const r = await getRecipe(ing);
      setRecipe(r);
    } catch (error) {
      console.error(error);
      toast.error("Erro na requisição:", error)
    } finally {
      setDisableBottom(false);
      toast.dismiss();
    }
  }
  function remove(item){
    setIngredient((prev) => prev.filter((i) =>i !== item))
    setRecipe()
  }

  const listIngridients = ingredient.map((item, index) => (
    <li key={index} className="flex gap-2 py-2">
      <FaCheckSquare onClick={() =>remove(item)}className="w-3 mt-1" />
      {item}
    </li>
  ));

  return (
    <>
      <div className="bg-[#FAFAf8] min-h-screen">
        <Header />
        <div className="w-[80%] md:w-[60%] m-auto">
          <Input setIngredient={setIngredient} onWarm={handleWarm} />

          <ul className="">{listIngridients}</ul>
          {ingredient.length > 1 && (
            <section className="flex gap-2 justify-around items-center border rounded-md mt-20 m-auto bg-slate-400/20 px-2 w-full h-[100px]">
              <div>
                <h2 className="text-2xl">Pronto para uma receita.</h2>
                <p className="text-slate-600">
                  Gere uma receita com a lista de ingredientes.
                </p>
              </div>
              <div>
                <button
                  disabled={disableBottom}
                  className={`shadow-lg p-2 rounded-md text-white hover:bg-orange-600
                     ${!disableBottom ? "bg-orange-500" : "bg-orange-200"}`}
                  onClick={() => handleRecipe(ingredient)}
                >
                  Enviar
                </button>
              </div>
            </section>
          )}
          <div className="py-4 mt-2">{recipe && <ReactMarkdown children={recipe} />}</div>
          <ToastContainer limit={1} />
        </div>
      </div>
    </>
  );
}

export default App;

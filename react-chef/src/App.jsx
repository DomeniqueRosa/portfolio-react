import { useRef, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import { FaCheckSquare } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [ingredient, setIngredient] = useState([]);
  const toastId = useRef(null);

  function handleWarm() {
    //prevenir de aparecer varios alarm se o usuario
    //clicar mais de uma vez
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error("Add valid ingredients");
    }
  }

  const listIngridients = ingredient.map((item, index) => (
    <li key={index} className="flex gap-2 py-2">
      <FaCheckSquare className="w-3 mt-1" />
      {item}
    </li>
  ));

  function handleRecipe() {}
  return (
    <>
      <div className="bg-[#FAFAf8] min-h-screen">
        <Header />
        <div className=" flex flex-col items-center">
          <Input setIngredient={setIngredient} onWarm={handleWarm} />

          <ul className="ml-[-61%] lg:ml-[-55%]">{listIngridients}</ul>
          {ingredient.length > 3 && (
            <section className="flex gap-2 justify-around items-center border rounded-md mt-20 m-auto bg-slate-400/20 px-2 w-full md:w-[72%] lg:w-[61%] h-[100px]">
              <div>
                <h2 className="text-2xl">Ready for a recipe</h2>
                <p className="text-slate-600">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <div>
                <button
                  className="p-2 bg-orange-400 rounded-md text-white hover:bg-orange-500"
                  onClick={notify}
                >
                  Get a recipe
                </button>
              </div>
            </section>
          )}
        </div>
        <ToastContainer theme="dark" limit={1} />
      </div>
    </>
  );
}

export default App;

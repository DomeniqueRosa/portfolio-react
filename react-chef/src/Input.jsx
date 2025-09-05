export default function Input({ setIngredient, ingredient, onWarm }) {
  //   function handleForm(e) {
  //     e.preventDefault();
  //     const formy = e.currentTarget
  //     const data = new FormData(formy)
  //     const newIng = data.get("ingredient")
  //     setIngredient(prev => [...prev, newIng]);
  //     // para limpar os input depois de pegar os dados
  //     formy.reset()
  //   }
  console.log(ingredient);
  function addIngredient(formData) {
    const newIng = formData.get("ingredient");
    //regex para verificar se a string contem numeros ou caracteres especiais
    const isValid = /^[a-zA-Z\p{L}\s]+$/u.test(newIng);

    if (newIng !== "" && isValid) {
      setIngredient((prev) => [...prev, newIng]);
    } else {
      onWarm();
    }
  }

  return (
    <>
      <form
        action={addIngredient}
        className="flex justify-center gap-4 mt-9 w-full"
      >
        <input
          type="text"
          placeholder="e.g oregano"
          className="w-[50%] rounded-md border-2 p-2"
          name="ingredient"
        />

        <button
          className="bg-slate-800 p-2 rounded-md text-white"
          type="submit"
        >
          + Add ingredientes
        </button>
      </form>
    </>
  );
}

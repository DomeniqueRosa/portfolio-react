export default function Input({ setIngredient, onWarm }) {
  //   function handleForm(e) {
  //     e.preventDefault();
  //     const formy = e.currentTarget
  //     const data = new FormData(formy)
  //     const newIng = data.get("ingredient")
  //     setIngredient(prev => [...prev, newIng]);
  //     // para limpar os input depois de pegar os dados
  //     formy.reset()
  //   }
  function addIngredient(formData) {
    const newIng = formData.get("ingredient");
    //regex para verificar se a string contem numeros ou caracteres especiais
    // const isValid = /^[a-zA-Z\p{L}\s]+$/u.test(newIng);

    if (newIng) {
      setIngredient((prev) => [...prev, newIng]);
    } else {
      onWarm();
    }
  }

  return (
    <>
      <form
        action={addIngredient}
        className="flex justify-center gap-4 mt-9"
      >
        <input
          type="text"
          placeholder="ex: 2 ovos"
          className="rounded-md border-2 w-full"
          name="ingredient"
        />

        <button
          className="bg-slate-800 p-2 rounded-md text-white"
          type="submit"
        >
          + Ingredientes
        </button>
      </form>
    </>
  );
}

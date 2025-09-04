export default function Input({ setIngredient }) {
  function handleForm(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const newIng = data.get("ingredient")
    setIngredient(...newIng);
  }
  return (
    <form onSubmit={handleForm} className="flex justify-center gap-4 mt-9">
      <input
        type="text"
        placeholder="e.g oregano"
        className=" rounded-md border-2 p-2"
        name="ingredient"
      />
      <button className="bg-slate-800 p-2 rounded-md text-white" type="submit">
        Add ingredientes
      </button>
    </form>
  );
}

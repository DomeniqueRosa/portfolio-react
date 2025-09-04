import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import { FaCheckSquare } from 'react-icons/fa';

function App() {
  const [ingredient, setIngredient] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  const listIngridients = ingredient.map((item, index) => (
    <li key={index} className="flex gap-2 align-center py-2">
      <FaCheckSquare className="w-3 mt-1"/>
      {item}</li>
  ));
  return (
    <>
      <div className="bg-[#FAFAf8] min-h-screen">
        <Header />
        <Input setIngredient={setIngredient} />

        <ul className="mt-4 ml-[27%]">{listIngridients}</ul>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Button from "./components/Button";
import Data from "../data.json"

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isActive, setIsActive] = useState(true)

  function handTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  function handIsActive(){
    alert("clicou para alterar! :)")
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="md:w-[70%]  m-auto">
        <Header isDark={isDark} handTheme={handTheme} />
        <div className="md:flex md:justify-between p-4 sm:justify-center">
          <h2 className="text-3xl">Extensions List</h2>
          <div className="flex gap-2">
            <Button title='All' />
            <Button title='Active' />
            <Button title='Inactive' />

          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
          {Data.map((item) => <Card title={item.name} description={item.description} isActive={item.isActive}
          logo={item.logo} key={item.name} setIsActive={handIsActive}/>)}
        </div>
      </div>
    </>
  );
}

export default App;

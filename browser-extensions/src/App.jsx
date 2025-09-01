import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Data from "../data.json"

function App() {
  const [isDark, setIsDark] = useState(false);

  function handTheme() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (
    <>
      <div className="md:w-[70%]  m-auto">
        <Header isDark={isDark} handTheme={handTheme} />
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
          {Data.map((item) => <Card title={item.name} description={item.description} isActive={item.isActive}
          logo={item.logo} key={item.name}/>)}
        </div>
      </div>
    </>
  );
}

export default App;

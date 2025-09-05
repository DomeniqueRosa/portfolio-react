import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => {
        const memes = json.data.memes;
        setImages(memes);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-purple-100">
        <Header />
        {images !== undefined && <Main images={images} />}
      </div>
    </>
  );
}

export default App;

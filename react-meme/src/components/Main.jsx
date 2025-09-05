import { useState } from "react";

export default function Main({ images }) {
  // console.log(images[0].url)
  const [meme, setMeme] = useState({
    topText: "well",
    bottomText: "stop",
    urlImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [color, setColor] = useState("text-black");

  let colors = [
    "text-white",
    "text-black",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
    "text-gray-500",
    "text-orange-500",
    "text-teal-500",
    "text-cyan-500",
    "text-lime-500",
    "text-amber-500",
    "text-emerald-500",
    "text-violet-500",
    "text-fuchsia-500",
    "text-rose-500",
    "text-sky-500",
    "text-zinc-500",
    "text-stone-500",
  ];
  function handleForm(formData) {
    // let memeTop = formData.get("memeTop");
    // let memeBottom = formData.get("memeBottom");
    // // console.log(randomiD);
    // setMeme((prev) => ({ ...prev, topText: memeTop, bottomText: memeBottom }));
    // // alert(memeTop + memeBottom);
  }

  function handleImage() {
    let randomiD = Math.floor(Math.random() * (100 - 0));
    setMeme((prev) => ({ ...prev, urlImage: images[randomiD].url }));
  }
  function handlTextTop(e) {
    setMeme((prev) => ({ ...prev, topText: e.target.value }));
  }
  function handleTextBottom(e) {
    setMeme((prev) => ({ ...prev, bottomText: e.target.value }));
  }

  function handleColor() {
    let c = Math.floor(Math.random() * (colors.length - 0));
    setColor(colors[c]);
  }
  return (
    <div>
      <form
        action={handleForm}
        className=" items-center justify-center flex flex-col gap-2"
      >
        <div className="gap-2 flex py-4 w-full justify-center ">
          <div className="flex flex-col">
            <label htmlFor="">Text Top</label>
            <input
              type="text"
              name="memeTop"
              id=""
              className="border-2 p-3 rounded-md "
              value={meme.topText}
              onChange={(e) => handlTextTop(e)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Bottom Text</label>
            <input
              type="text"
              name="memeBottom"
              value={meme.bottomText}
              onChange={(e) => handleTextBottom(e)}
              className="border-2 p-3 rounded-md"
            />
          </div>
        </div>
        <button
          className="bg-purple-800 w-[420px] py-2 rounded-md text-white mb-4"
          onClick={handleImage}
        >
          Get a new Image
        </button>

        <button
          className="bg-purple-400 w-[420px] py-2 rounded-md text-white mb-4"
          onClick={handleColor}
        >
          Change font color
        </button>

        <div className="relative">
          <span
            className={`absolute left-1/2 top-10 -translate-x-1/2 ${color} font-bold text-5xl`}
          >
            {meme.topText}
          </span>
          <span
            className={`absolute left-1/2 bottom-10 -translate-x-1/2 ${color} font-bold text-5xl`}
          >
            {meme.bottomText}
          </span>
          <img src={meme.urlImage} alt="image of meme" className="object-fit" />
        </div>
      </form>
    </div>
  );
}

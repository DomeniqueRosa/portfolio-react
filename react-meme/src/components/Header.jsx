import trolFace from '../assets/troll-face.png'

export default function Header() {
  return (
    <div className='gap-2 h-[100px] flex items-center justify-center bg-purple-800'>
      <img src={trolFace} alt="face f troll" className='w-14 '/>
      <h1 className='text-white'>Meme Generator</h1>
    </div>
  )
}

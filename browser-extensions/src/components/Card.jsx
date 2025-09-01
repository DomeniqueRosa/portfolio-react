
export default function Card({ title, description, isActive, logo }) {

  return (
    <div className="shadow bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 m-1 max-w-[380px] h-[200px]">
      <div className="flex  items-start gap-3">
        <img src={logo} alt="" />
        <div>
          <h3 className="dark:text-white text-neutral-900 font-semibold text-lg">{title}</h3>
          <p className="dark:text-gray-300  text-neutral-500 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <button className="border-0.5 hover:bg-red-600 hover:text-white dark:text-white text-neutral-900 px-5 py-2 rounded-full font-medium shadow-md transition-colors duration-200 flex items-center">
          Remove
        </button>

        <button>
          Trocar
        </button>
      </div>
    </div>
  );
}

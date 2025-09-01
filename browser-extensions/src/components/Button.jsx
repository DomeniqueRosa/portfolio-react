

export default function Button({title, handle}) {
  return (
    <button
      className="border-0.5 bg-white dark:bg-neutral-700 dark:hover:bg-red-600 hover:bg-red-600 hover:text-white dark:text-white text-neutral-900 px-5 py-2 rounded-full font-medium shadow-md transition-colors duration-200 flex items-center"
      onClick={handle}
    >
      {title}
    </button>
  );
}

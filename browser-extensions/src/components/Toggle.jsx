

export default function Toggle({enabled, setEnabled}) {

  return (
    <button
      onClick={setEnabled}
      className={`
        relative inline-flex h-6 w-12 items-center rounded-full 
        transition-colors duration-300 
        ${enabled ? "bg-red-500" : "bg-gray-400"}
      `}
    >
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}

import React, { useState } from 'react';

export default function Card() {
  const [ativo, setAtivo] = useState(false)
  return (
    <div className="bg-[#23263A] rounded-xl p-4 flex flex-col w-[300px]">
      <div className="flex items-start gap-3">
        <div className="bg-[#C7FCEC] rounded-md p-2">
          <svg width="24" height="24" fill="none">
            <rect width="24" height="24" rx="4" fill="#23263A" />
            <rect x="5" y="5" width="14" height="14" rx="2" fill="#C7FCEC" />
            {/* Substitua o SVG pelo logo real se houver */}
          </svg>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">DevLens</h3>
          <p className="text-gray-300 text-sm">
            Quickly inspect page layouts and visualize element boundaries.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium shadow-md transition-colors duration-200 flex items-center">
          Remove
        </button>
       
       {/* escolha */}
       <input type="checkout" checked={ativo} 
       onChange={() => setAtivo(!ativo)}/>
      </div>
    </div>
  );
}

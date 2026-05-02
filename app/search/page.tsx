"use client";
import React, { useState } from 'react';

export default function SearchPage() {
  const [term, setTerm] = useState("");
  
  return (
    <div className="min-h-screen bg-[#202124] text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-8 text-blue-500">Fahim Search</h1>
      <div className="w-full max-w-md">
        <input 
          type="text" 
          className="w-full p-4 rounded-full bg-[#303134] border border-gray-600 outline-none focus:border-blue-500"
          placeholder="Cerca su Fahim Search..."
          onChange={(e) => setTerm(e.target.value)}
        />
        {term && <p className="mt-4 text-center">Stai cercando: {term}</p>}
      </div>
    </div>
  );
}

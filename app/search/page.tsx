"use client";
import React, { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const database = [
    { title: "Progetti di Fahim", desc: "Tutti i miei lavori di ingegneria." },
    { title: "Esplorazione Marte", desc: "Dati e ricerche sul pianeta rosso." },
    { title: "Costruzioni Civili", desc: "Come progettare ponti resistenti." }
  ];

  const filtered = database.filter(i => i.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#202124', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#4285F4', fontSize: '40px' }}>Fahim Search</h1>
      <input 
        type="text" 
        placeholder="Cerca nei miei progetti..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '20px auto', padding: '12px 20px', borderRadius: '25px', border: '1px solid #5f6368', backgroundColor: '#303134', color: 'white' }}
      />
      <div style={{ maxWidth: '600px', margin: '40px auto' }}>
        {filtered.map((item, id) => (
          <div key={id} style={{ marginBottom: '20px', borderBottom: '1px solid #3c4043', paddingBottom: '10px' }}>
            <h3 style={{ color: '#8ab4f8', margin: '0' }}>{item.title}</h3>
            <p style={{ color: '#bdc1c6' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

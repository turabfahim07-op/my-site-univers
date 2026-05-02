 "use client";
import React, { useState } from 'react';

export default function FahimSearch() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ backgroundColor: '#202124', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '60px', fontWeight: 'bold', marginBottom: '30px' }}>
        <span style={{ color: '#4285F4' }}>F</span>
        <span style={{ color: '#EA4335' }}>a</span>
        <span style={{ color: '#FBBC05' }}>h</span>
        <span style={{ color: '#4285F4' }}>i</span>
        <span style={{ color: '#34A853' }}>m</span>
        <span style={{ color: 'white', marginLeft: '10px' }}>Search</span>
      </h1>
      
      <div style={{ width: '90%', maxWidth: '600px' }}>
        <input 
          type="text" 
          placeholder="Cerca nel tuo impero..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: '100%', padding: '15px 25px', borderRadius: '30px', border: '1px solid #5f6368', backgroundColor: '#303134', color: 'white', fontSize: '18px', outline: 'none' }}
        />
        {query && (
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#303134', borderRadius: '15px' }}>
            <p style={{ color: '#bdc1c6' }}>Risultati per: <strong>{query}</strong></p>
            <hr style={{ borderColor: '#5f6368', margin: '10px 0' }} />
            <p style={{ color: '#8ab4f8', cursor: 'pointer' }}>Benvenuto nel motore di ricerca di Fahim!</p>
          </div>
        )}
      </div>
    </div>
  );
}

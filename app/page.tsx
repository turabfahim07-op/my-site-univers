"use client";

import React from 'react';

const SearchPage = () => {
    const database = [
        "Fahim Turab Tech",
        "Progetto Marte 2026",
        "Costruzione Ponti",
        "Software Fahim"
    ];

    return (
        <div className="dark-theme">
            <h1>Search Page</h1>
            <ul>
                {database.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;
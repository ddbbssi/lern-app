import React, { useState } from "react";
import kontrollfragen from "../daten/Kontrollfragen_HF1bis4.json";

const Kontrollfrage = ({ nummer, frage, antwort }) => {
    const [showAntwort, setShowAntwort] = useState(false);

    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            backgroundColor: "#f9f9f9"
        }}>
            <h3>Frage {nummer}</h3>
            <p>{frage}</p>
            <button onClick={() => setShowAntwort(!showAntwort)}>
                {showAntwort ? "Antwort ausblenden" : "Antwort anzeigen"}
            </button>
            {showAntwort && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{antwort}</p>}
        </div>
    );
};

const Kontrollfragen = () => {
    return (
        <div style={{ padding: "2rem" }}>
            <h2>Kontrollfragen (HF1 bis HF4)</h2>
            {kontrollfragen.map((frage) => (
                <Kontrollfrage
                    key={frage.nummer}
                    nummer={frage.nummer}
                    frage={frage.frage}
                    antwort={frage.antwort}
                />
            ))}
        </div>
    );
};

export default Kontrollfragen;

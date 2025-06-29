import React, { useState } from "react";

const UebungsKarte = ({ nummer, aufgabe, antworten, loesung }) => {
    const [showLoesung, setShowLoesung] = useState(false);

    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "12px"
        }}>
            <h3>Übung {nummer}</h3>
            <p>{aufgabe}</p>
            <ul>
                {antworten.map((a, idx) => (
                    <li key={idx}>{a}</li>
                ))}
            </ul>
            <button onClick={() => setShowLoesung(!showLoesung)}>
                {showLoesung ? "Lösung verbergen" : "Lösung anzeigen"}
            </button>
            {showLoesung && (
                <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                    Richtige Antwort(en): {loesung.join(", ")}
                </p>
            )}
        </div>
    );
};

export default UebungsKarte;

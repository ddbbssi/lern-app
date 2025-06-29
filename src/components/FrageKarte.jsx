import React, { useState } from "react";

const FrageKarte = ({ frage, antwort, nummer }) => {
    const [showAntwort, setShowAntwort] = useState(false);

    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "12px"
        }}>
            <h3>Frage {nummer}</h3>
            <p>{frage}</p>
            <button onClick={() => setShowAntwort(!showAntwort)}>
                {showAntwort ? "Antwort verbergen" : "Antwort anzeigen"}
            </button>
            {showAntwort && (
                <p style={{ marginTop: "10px", fontWeight: "bold" }}>{antwort}</p>
            )}
        </div>
    );
};

export default FrageKarte;

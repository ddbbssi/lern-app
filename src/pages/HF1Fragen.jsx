import React from "react";
import daten from "../daten/HF1Loesungen.json";
import FrageKarte from "../components/FrageKarte";

const HF1Fragen = () => (
    <div>
        <h2>HF 1 – Testfragen</h2>
        {daten.map((eintrag) => (
            <FrageKarte
                key={eintrag.nummer}
                nummer={eintrag.nummer}
                frage={eintrag.frage}
                antwort={eintrag.antwort}
            />
        ))}
    </div>
);

export default HF1Fragen;

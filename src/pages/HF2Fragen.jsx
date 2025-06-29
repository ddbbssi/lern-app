import React from "react";
import daten from "../daten/HF2Loesungen.json";
import FrageKarte from "../components/FrageKarte";

const HF2Fragen = () => (
    <div>
        <h2>HF 2 – Testfragen</h2>
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

export default HF2Fragen;

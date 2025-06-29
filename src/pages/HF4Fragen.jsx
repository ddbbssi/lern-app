import React from "react";
import daten from "../daten/HF4Loesungen.json";
import FrageKarte from "../components/FrageKarte";

const HF4Fragen = () => (
    <div>
        <h2>HF 4 – Testfragen</h2>
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

export default HF4Fragen;

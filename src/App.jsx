import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HF1Fragen from "./pages/HF1Fragen";
import HF2Fragen from "./pages/HF2Fragen";
import HF4Fragen from "./pages/HF4Fragen";



function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>HF Lern-App</h1>
            <nav style={{ marginBottom: "20px" }}>
                <Link to="/hf1" style={{ marginRight: "10px" }}>HF1 Fragen</Link>
                <Link to="/hf2" style={{ marginRight: "10px" }}>HF2 Fragen</Link>
                <Link to="/hf4" style={{ marginRight: "10px" }}>HF4 Fragen</Link>

            </nav>

            <Routes>
                <Route path="/hf1" element={<HF1Fragen />} />
                <Route path="/hf2" element={<HF2Fragen />} />
                <Route path="/hf4" element={<HF4Fragen />} />

            </Routes>
        </div>
    );
}

export default App;

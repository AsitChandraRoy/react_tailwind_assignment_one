import React from "react";
import "./App.css";
import Navbar from "./components/Dashboard/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Incidents from "./components/pages/incidents";
import Locations from "./components/pages/Locations";
import Activities from "./components/pages/Activities";
import Documents from "./components/pages/Documents";
import CypherAI from "./components/pages/CypherAI";
import ShowCButton from "./components/Dashboard/ShowCButton";

function App() {
  return (
    <main className="font-honest">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path="/" element={<ShowCButton />} />
            <Route path="/Incidents" element={<Incidents />} />
            <Route path="Locations" element={<Locations />} />
            <Route path="Activities" element={<Activities />} />
            <Route path="Documents" element={<Documents />} />
            <Route path="CypherAI" element={<CypherAI />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

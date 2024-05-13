import React from "react";
import "./App.css";
import Homepage from "@pages/Homepage";
import TopAnimePage from "@pages/TopAnimePage";
import Season from "@pages/Season";
import DetailAnime from "@pages/DetailAnime";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/top-anime" element={<TopAnimePage />} />
        <Route path="/season" element={<Season />} />
        <Route path="/detail-anime" element={<DetailAnime />} />
      </Route>
    </Routes>
  );
}

export default App;

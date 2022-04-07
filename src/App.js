import React from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Intro />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

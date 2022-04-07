import React, { useState } from "react";
import { CSVLink } from "react-csv";
import Intro from "./Intro";
import Quiz from "./Quiz";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { render } from "@testing-library/react";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

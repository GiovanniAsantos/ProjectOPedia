import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./Pages/Home";
import TopicsCovered from "./Pages/TopicsCovered";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topiccovered" element={<TopicsCovered />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

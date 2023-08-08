/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { TimerProvider } from "./contexts/TimerContext";
import BurgerNav from "./components/BurgerNav";
import PageNav from "./components/PageNav"; // Import your PageNav component
import Impressum from "./pages/Impressum";
import Info from "./pages/Info";
import PageNotFound from "./pages/PageNotFound";
import Pomodofy from "./pages/Pomodofy";
import Settings from "./pages/Settings";
import { useMediaQuery } from "react-responsive"; // Import the react-responsive package

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Check if it's a mobile screen

  return (
    <TimerProvider>
      <BrowserRouter>
        {isMobile ? <BurgerNav /> : <PageNav />}{" "}
        {/* Conditionally render BurgerNav or PageNav */}
        <Routes>
          <Route index element={<Pomodofy />} />
          <Route path='pomodofy' element={<Pomodofy />} />
          <Route path='info' element={<Info />} />
          <Route path='settings' element={<Settings />} />
          <Route path='impressum' element={<Impressum />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TimerProvider>
  );
}

export default App;

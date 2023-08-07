/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import PageNav from "./components/PageNav";
import Impressum from "./pages/Impressum";
import Info from "./pages/Info";
import PageNotFound from "./pages/PageNotFound";
import Pomodofy from "./pages/Pomodofy";
import Settings from "./pages/Settings";
import { TimerProvider } from "./contexts/TimerContext";

function App() {
  return (
    <TimerProvider>
      <BrowserRouter>
        <PageNav />
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

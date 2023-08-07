/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Info from "./pages/Info";
import PageNotFound from "./pages/PageNotFound";
import Pomodofy from "./pages/Pomodofy";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='pomodofy' element={<Pomodofy />} />
        <Route path='info' element={<Info />} />
        <Route path='settings' element={<Settings />} />
        <Route path='impressum' element={<Impressum />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

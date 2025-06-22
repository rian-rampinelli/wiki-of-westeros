import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../components/NotFound";
import Sobre from "../components/Sobre";
import Personagens from "../components/Personagens";  

import LayoutCasas from "../components/LayoutCasas";
import Starks from "../pages/Starks";
import Lannisters from "../pages/Lannisters";
import Targaryens from "../pages/Targaryens";
import Baratheons from "../pages/Baratheons";
import Greyjoys from "../pages/Greyjoys";
import Livros from "../components/Livros";


function AppRoutes() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Sobre />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/personagens" element={<Personagens />} />  
      <Route path="/layoutcasas" element={<LayoutCasas />} />  
      <Route path="/livros" element={<Livros />} />  

      <Route path="/starks" element={<Starks />} />
      <Route path="/lannisters" element={<Lannisters />} />
      <Route path="/targaryens" element={<Targaryens />} />
      <Route path="/baratheons" element={<Baratheons />} />
      <Route path="/greyjoys" element={<Greyjoys/>} />


      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default AppRoutes
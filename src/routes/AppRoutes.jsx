import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Sobre from "../components/Sobre";
import Personagens from "../components/Personagens";  
import Casas from "../components/Casas";
import LayoutCasas from "../components/LayoutCasas";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sobre />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/Casas" element={<Casas />} />  
      <Route path="/personagens" element={<Personagens />} />  
      <Route path="/layoutcasas" element={<LayoutCasas />} />  
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Sobre from "../components/Sobre";
import Personagens from "../components/Personagens";  

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sobre />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/personagens" element={<Personagens />} />  
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes
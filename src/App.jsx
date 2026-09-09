
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Sobre from "./pages/Sobre.jsx";




function App() {



  return (
 
      <Routes>
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/*" element={
              <div id="app-container">
                <AppRoutes />
              </div>
          }
        />
      </Routes>
  
  );
}

export default App;

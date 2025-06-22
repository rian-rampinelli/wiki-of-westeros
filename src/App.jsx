import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AppRoutes from "./routes/AppRoutes";




function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem('auth') === 'true';
  });


  function handleLogin() {
    setIsLoggedIn(true);
    localStorage.setItem('auth', 'true');
  }



  return (
 
      <Routes>
        <Route path="/login" element={<Login onlogin={handleLogin} />} />
        <Route path="/*" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div id="app-container">
                <AppRoutes />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
  
  );
}

export default App;

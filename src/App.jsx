import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
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
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

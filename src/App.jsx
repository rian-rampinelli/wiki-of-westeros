import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './home/NavBar';
import Footer from './home/Footer';
import Content from './home/Content';
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute.jsx";

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
        
        <Route
          path="/*"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div id="app-container">
                <NavBar />
                <Content />
                <Footer />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

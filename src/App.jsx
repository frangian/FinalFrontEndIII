import { useEffect, useContext } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ContextGlobal } from './Components/utils/global.context';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
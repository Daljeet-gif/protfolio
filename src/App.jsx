import { useContext, useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import { ThemeContext } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";
import About from "./components/About";
function App() {
 
  const { theme } = useContext(ThemeContext);

  // actual change in theme
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <>
     <div className="dark:bg-gray-800  dark:border-gray-700 mb-0 dark:text-white">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      </div>
      <Toaster></Toaster>
    </>
  );
}

export default App;

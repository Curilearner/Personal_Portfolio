import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./assets/components/layout/Navbar";
import Banner from "./assets/components/layout/Banner";
function App() {
  const [darkTheme, setdarkTheme] = useState(true);

  function toggleTheme() {
    setdarkTheme((prev) => !prev);
  }

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        <div className={darkTheme ? "bg-black min-h-screen" : "bg-white min-h-screen"}>
          <Navbar />
          <Banner />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

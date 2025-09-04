import { useState, useContext } from "react";
export const ThemeContext = React.createContext();
import Navbar from "./assets/components/layout/Navbar";
function App() {
  const [darkTheme, setdarkTheme] = useState(true);

  function toggleTheme() {
    setdarkTheme((prev) => {
      !prev;
    });
  }
  return (
    <>
      <ThemeContext.Provider value={(darkTheme, toggleTheme)}>
        <Navbar />
      </ThemeContext.Provider>
    </>
  );
}

export default App;

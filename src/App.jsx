import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Navbar from "./layout/navbar";
import Body from "./layout/body";
import { TodoProvider } from "./TodoContext.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <GlobalStyles />
        <TodoProvider>
          <Body />
        </TodoProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { darkTheme,lightTheme } from "./styles/theme";
import Home from "./layout/navbar";
import Body from "./layout/body";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode=() => {
    setIsDarkMode((prev) => !prev);
  };


  return (
    <div className="App">
    
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <GlobalStyles />
        <Body/>

      </ThemeProvider>
     
    </div>
  );
}

export default App;

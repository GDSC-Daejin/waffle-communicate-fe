import React, { useState } from "react";
import TodoCreate from "../components/TodoCreate";
import TodoBoard from "../components/TodoBoard";
import Footer from "./footer";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/theme";
import Navbar from "./navbar";
import { TodoProvider } from "../TodoContext";

function Body() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <GlobalStyles />
        <TodoProvider>
          <TodoCreate />
          <TodoBoard />
          <Footer />
        </TodoProvider>
      </ThemeProvider>
    </>
  );
}

export default Body;

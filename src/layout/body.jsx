import React from "react";
import TodoCreate from "../components/TodoCreate";
import TodoBoard from "../components/TodoBoard";
import Footer from "./footer";

function Body() {
  return (
    <>
      <TodoCreate />
      <TodoBoard />
      <Footer />
    </>
  );
}

export default Body;

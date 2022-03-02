import React from "react";
import CountContextProvider from "./context/countContextProvider";
import Mainscreen from "./src/screens/MainScreen";
export default function App() {
  return (
    <CountContextProvider>
      <Mainscreen />
    </CountContextProvider>
  );
}
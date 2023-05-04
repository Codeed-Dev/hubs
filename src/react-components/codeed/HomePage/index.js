import React from "react";
import { PageLayoutContextProvider } from "../Contexts/PageLayoutContext";
import HomePage from "./home";

const CodeedHomePage = () => {
  return (
    <PageLayoutContextProvider>
      <HomePage />
    </PageLayoutContextProvider>
  );
};

export default CodeedHomePage;

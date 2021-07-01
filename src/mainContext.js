import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLink = (str) => {
    setActiveLink(str);
  };

  const getFirstUrl = () => {
    let str = window.location.pathname;
    str = str.slice(1, str.length);
    if (str.indexOf("/") !== -1) {
      return str.slice(0, str.indexOf("/"));
    }
    return str;
  };

  useEffect(() => {
    const urlString = getFirstUrl();
    setActiveLink(urlString);
  }, []);

  return (
    <AppContext.Provider value={{ activeLink, handleLink }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

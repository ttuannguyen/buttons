import { useContext } from "react";

import React from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);
  
  const handleClick = (event) => {
    event.preventDefault();

  };
  return <a onClick={handleClick}>{children}</a>;
  
  
};

export default Link;

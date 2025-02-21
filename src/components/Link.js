import { useContext } from "react";

import React from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);
  
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    
    event.preventDefault();

    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
  
  
};

export default Link;

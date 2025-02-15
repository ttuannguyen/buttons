import React, { useState } from "react";

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event) => {
    // Close dropdown
    setIsOpen(false);
    // Option the user clicks on
    console.log(event);
  }
  
  const renderedOptions = options.map((option) => {
    return <div onClick={() => handleOptionClick} key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default DropDown;

import React, { useState } from "react";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Close dropdown
    setIsOpen(false);
    // Option the user clicks on
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

//   let content = "Select...";
//   if (selection) {
//     content = selection.label;
//   }

  return (
    <div>
      <div onClick={handleClick}>{value?.label || 'Select...' }</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default DropDown;

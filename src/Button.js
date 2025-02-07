import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  //   if (primary && secondary) {
  //     throw new Error('only one should be provided');
  //   }

  let baseClassName = 'px-3 py-1.5 border';
  if (primary) {
    baseClassName += 'border-blue-700 bg-blue-500 text-white';
  } else if (secondary) {

  }

  return <button className=''>{children}</button>;
};



Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger);

    if (count > 1) {
        return new Error('Only one of primary, secondary, success, warning, danger can be true');
    }
  },
};

export default Button;

import React from "react";
import PropTypes from "prop-types";

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

  return <button className="bg-red-500">{children}</button>;
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

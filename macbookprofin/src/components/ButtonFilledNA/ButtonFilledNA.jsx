/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonFilledNA = ({ className, labelTextClassName, text = "Enabled" }) => {
  return (
    <div className={`button-filled-n-a ${className}`}>
      <div className="state-layer">
        <div className={`label-text ${labelTextClassName}`}>{text}</div>
      </div>
    </div>
  );
};

ButtonFilledNA.propTypes = {
  text: PropTypes.string,
};

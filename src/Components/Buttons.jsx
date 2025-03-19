import React from "react";

const Buttons = ({ children, textColor = "#eff1f7", bgColor = "#2bd0d0" }) => {
  return (
    <button
      className={`py-2 px-5 text-xs rounded-3xl `}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
};

export default Buttons;

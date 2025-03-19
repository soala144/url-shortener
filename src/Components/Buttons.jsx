import React from "react";

const Buttons = ({
  children,
  textColor = "#eff1f7",
  bgColor = "#2bd0d0",
  borderRadius = "16px",
}) => {
  return (
    <button
      className={`py-2 px-5 text-xs  `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </button>
  );
};

export default Buttons;

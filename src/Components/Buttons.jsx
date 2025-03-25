import React from "react";

const Buttons = ({
  children,
  textColor = "#eff1f7",
  bgColor = "#2bd0d0",
  borderRadius = "16px",
  onClick,
}) => {
  return (
    <button
      className={`py-2 px-5 text-xs  `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: borderRadius,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttons;

import React from "react";

const Background = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-[#FFF1A8] to-[#FFECD6] h-screen">
      {children}
    </div>
  );
};

export default Background;

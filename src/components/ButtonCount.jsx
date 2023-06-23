import React from "react";
import "./ButtonCount.css";
export const ButtonCount = () => {
  return (
    <div className="container-btn">
      <button className="btn-menos">-</button>
      <span className="count">1</span>
      <button className="btn-mas">+</button>
    </div>
  );
};

import React from "react";
import "./ImageCard.css";
import { Icon } from "@iconify/react";
const ImageCard = () => {
  return (
    <div className="container-card">
      <div className="a">
        <Icon icon="bx:heart-circle" color="#f69" width="37" />
      </div>

      <img src="../public/static/images/cactus.png" alt="" />
    </div>
  );
};

export default ImageCard;

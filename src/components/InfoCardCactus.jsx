import React from "react";
import "./InfoCardCactus.css";
import { Icon } from "@iconify/react";
import { ButtonCount } from "./ButtonCount";
const InfoCardCactus = () => {
  return (
    <div className="container-card-info">
      <div className="title-price">
        <h3 className="title">Standard Cactus</h3>
        <span className="price">$20.0</span>
      </div>
      <p className="p">Succulent</p>
      <div className="star-review">
        <div className="stars">
          <Icon icon="ph:star-fill" color="#fedb4d" width="37" />
          <Icon icon="ph:star-fill" color="#fedb4d" width="37" />
          <Icon icon="ph:star-fill" color="#fedb4d" width="37" />
          <Icon icon="ph:star-fill" color="#fedb4d" width="37" />
        </div>
        <span className="review">2 reviews</span>
      </div>
      <ButtonCount />
    </div>
  );
};

export default InfoCardCactus;

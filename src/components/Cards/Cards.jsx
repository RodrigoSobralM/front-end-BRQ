import React from "react";
import "./index.css";
const Cards = ({ data }) => {
  return (
    <div className="LogadoCard">
      <div className="card">
        <h1>{data.title}</h1>
        <div className="imgs">
          <img src={data.imgCarro} alt="" />
        </div>
        <p>{data.preco}</p>
        <div className="cardDescriptionAgeAndKm">
          <p>{data.ano}</p>
          <img src="/point.svg" alt="" />
          <p>{data.km}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

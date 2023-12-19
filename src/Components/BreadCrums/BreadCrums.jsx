import React from "react";
import "./BreadCrum.css";
import breadcrum_arrow from "../Assets/breadcrum_arrow.png";

const BreadCrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrums">
      HOME <img src={breadcrum_arrow} alt="" /> SHOPE{" "}
      <img src={breadcrum_arrow} alt="" />
      {product.category} <img src={breadcrum_arrow} alt="" /> {product.name}
    </div>
  );
};

export default BreadCrums;

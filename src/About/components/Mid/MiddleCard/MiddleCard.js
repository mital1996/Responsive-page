import React from "react";
import classes from "./MiddleCard.module.css";

const MiddleCard = (props) => {
  return (
    <div className={`${classes.middleCard}`}>
      <div>
        <img src={props.icon} alt="symbol" />
      </div>
      <div className={classes.titlePara}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default MiddleCard;

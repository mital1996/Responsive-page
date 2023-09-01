import classes from "./GiCard.module.css";

const GiCard = (props) => {
  return (
    <div className={classes["cards"]}>
      <div className={classes["gi-logos"]}>
        <img src={props.logo} alt="symbol" height="70px" />
      </div>
      <div className={classes.first}>
        <p>{props.title}</p>
      </div>
      <div className={classes.second}>
        <p>{props.desc}</p>
      </div>
      <div className={classes.design}>
        <a href="/#">Learn more</a>
      </div>
      <hr className={classes.mediaHr} />
    </div>
  );
};

export default GiCard;

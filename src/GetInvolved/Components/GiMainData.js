import classes from "./GiMainData.module.css";
import LogoOne from "../../../src/Logo/GetInvolved/LogoOne.png";

const GiMainData = () => {
  return (
    <div className={classes.mainGiContainer}>
      <div className={classes.giContainer}>
        <img src={LogoOne} alt="symbol" />
        <p className={classes.giHeading}>Get Involved</p>
        <h1>Using the ClearlyDefined data</h1>
        <p className={classes.giPara}>
          All of the ClearlyDefined data is available for everyone to see and
          use. You can browse and inspect in a convenient web ui or hook up a
          client to the REST API and integrate it into your systems.
        </p>
      </div>
    </div>
  );
};

export default GiMainData;

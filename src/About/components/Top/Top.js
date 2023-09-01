import classes from "./Top.module.css";

const Top = () => {
  return (
    <div className={`${classes["top-container"]} spacing`}>
      <div className={classes["text-container"]}>
        <div className={classes.mainHeader}>
          <h1>Bringing clarity to Open Source Software licenses.</h1>
        </div>
        <p>
          Welcome to your centralized and curated data store <br /> for Open
          Source Software licenses.
        </p>
        <button>Get Involved</button>
      </div>
    </div>
  );
};

export default Top;

import classes from "./Footer.module.css";
import github from "../../../../../src/Images/Socials/github.png";
import twitter from "../../../../../src/Images/Socials/twitter.png";
import discord from "../../../../../src/Images/Socials/discord.png";

const Footer = () => {
  return (
    <div className={`${classes["footer-container"]} spacing`}>
      <div className={classes["social-container"]}>
        <span>
          <a href="/#">
            <img src={github} alt="github" />
          </a>{" "}
          <a href="/#">
            <img src={twitter} alt="twitter" />
          </a>{" "}
          <a href="/#">
            <img src={discord} alt="discord" />
          </a>
        </span>
      </div>
      <div className={classes["lowest-container"]}>
        <div className={classes["microsoft-anchor"]}>
          <span>
            ClearlyDefined was created by the{" "}
            <a href="/#">Open Source Initiative</a> in partnership with{" "}
            <a href="/#">Microsoft.</a>
          </span>
        </div>

        <div className={classes["terms-container"]}>
          <span>
            <a href="/#">Terms</a> <a href="/#">Privacy</a>{" "}
            <a href="/#">Policy</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

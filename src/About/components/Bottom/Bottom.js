import classes from "./Bottom.module.css";
import Goal from "./Goals/Goals";
import Gi from "./GetInvolved/Gi";
import Footer from "./Footer/Footer";

const Bottom = () => {
  return (
    <div className={classes["bottom-container"]}>
      <Goal />
      <Gi />
      <Footer />
    </div>
  );
};

export default Bottom;

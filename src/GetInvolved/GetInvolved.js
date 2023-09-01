import classes from "./GetInvolved.module.css";
import Navbar from "../About/components/Navbar/Navbar";
import Gi from "../../src/About/components/Bottom/GetInvolved/Gi";
import Footer from "../About/components/Bottom/Footer/Footer";
import GiMainData from "./Components/GiMainData";
import GiCoOrdinates from "./Components/GiCoOrdinates";

const GetInvolved = () => {
  return (
    <div className={classes["getInvolved--container"]}>
      <Navbar />
      <GiMainData />
      <GiCoOrdinates />
      <Gi />
      <Footer />
    </div>
  );
};
export default GetInvolved;

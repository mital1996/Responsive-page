import { Fragment } from "react";
import Middle from "./components/Mid/Middle";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <Top />
      <Middle />
      <Bottom />
    </Fragment>
  );
};

export default About;

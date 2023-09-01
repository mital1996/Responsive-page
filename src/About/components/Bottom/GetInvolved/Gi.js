import classes from "./Gi.module.css";
import LogoOne from "../../../../../src/Logo/GetInvolved/LogoOne.png";
import LogoTwo from "../../../../../src/Logo/GetInvolved/LogoTwo.png";
import LogoThree from "../../../../../src/Logo/GetInvolved/LogoThree.png";
import LogoFour from "../../../../../src/Logo/GetInvolved/LogoFour.png";
import LogoFive from "../../../../../src/Logo/GetInvolved/LogoFive.png";
import LogoSix from "../../../../../src/Logo/GetInvolved/LogoSix.png";
import GiCard from "./GiCard/GiCard";

const GiDatas = [
  {
    id: "gi1",
    logo: LogoOne,
    title: "Use the Data",
    desc: "The simplest thing you can do to get involved is to use the data.",
  },
  {
    id: "gi2",
    logo: LogoTwo,
    title: "Curate Data",
    desc: "Vet, discuss and merge contributions to the project.",
  },
  {
    id: "gi3",
    logo: LogoThree,
    title: "Contribute Data",
    desc: "Enhacing the data is something that anyone can do.",
  },
  {
    id: "gi4",
    logo: LogoFour,
    title: "Contribute Code",
    desc: "It’s about the data but there is a non-trivial service that drives it.",
  },
  {
    id: "gi5",
    logo: LogoFive,
    title: "Add a Harvest",
    desc: "Add to our growing types of packages.",
  },
  {
    id: "gi6",
    logo: LogoSix,
    title: "Adopt Practices",
    desc: "Help ensure that the information for components is correct.",
  },
];

const GetInvolved = () => {
  return (
    <div className={`${classes["getInvolved-container"]} spacing`}>
      <h3>6 ways to get involved</h3>
      <div className={classes["card-container"]}>
        {GiDatas.map((data, idx) => (
          <GiCard
            key={idx}
            logo={data.logo}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default GetInvolved;

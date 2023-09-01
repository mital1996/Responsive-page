import React from "react";
import classes from "./Middle.module.css";
import MiddleCard from "./MiddleCard/MiddleCard";
import Design from "../../../../src/Images/designimg.svg";
import LogoOne from "../../../../src/Logo/MiddleIcons/vectagain.png";
import LogoTwo from "../../../../src/Logo/MiddleIcons/Vector.png";
import LogoThree from "../../../../src/Logo/MiddleIcons/Frame.png";

const MiddleContent = [
  {
    id: 1,
    logo: LogoOne,
    title: "Centralized",
    description:
      "ClearlyDefined is you central hub for all things  Open Source Software licenses. It’s here you’ll find, or contribute, to critical license data.",
  },
  {
    id: 2,
    logo: LogoTwo,
    title: "Curated",
    description:
      "License data is curated by our dedicated team of contributors, and people like you. Our goal is to ensure completeness and accuracy of data.",
  },
  {
    id: 3,
    logo: LogoThree,
    title: "Open Source",
    description:
      "The more, the merrier. We all benefit from the open source nature of ClearlyDefined, where together, we can all make a meaningful contribution.",
  },
];
const heading =
  "Maecenas sed diam eget risus varius blandit sit amet non magna.";

const Middle = () => {
  return (
    <div className={`${classes.mainMidContainer} spacing`}>
      <div className={classes.middleContainer}>
        <div className={classes.headingContainer}>
          <h1>{heading}</h1>
        </div>
        <div>
          <div>
            {MiddleContent.map((data) => (
              <MiddleCard
                key={data?.id}
                icon={data.logo}
                title={data.title}
                desc={data.description}
              />
            ))}
          </div>
        </div>
      </div>
      <img
        className={classes["design-image-container"]}
        src={Design}
        alt="design"
        width="100%"
      />
    </div>
  );
};

export default Middle;

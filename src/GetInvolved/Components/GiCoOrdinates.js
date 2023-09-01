import classes from "./GiCoOrdinates.module.css";
import GiNav from "../../../src/Images/GiNav.png";
import UrlOne from "../../../src/Images/urlOne.png";
import UrlTwo from "../../../src/Images/urlTwo.png";
// import Li from "../../../src/components/Li";
const giSegments = [
  {
    liData:
      "type - the type of the component you are looking for. For example npm, git, nuget, maven, ...This talks about the shapes of the component.",
    key: "giS1",
  },
  {
    liData:
      "component - where the component can be found. Examples include npmjs, mavencentral, github, nuget, ...",
    key: "giS2",
  },
  {
    liData:
      "namespace – many component systems have namespaces. GitHub orgs, NPM namespace, Maven group id, … This segment must be supplied. If your component does not have a namespace, use ‘-‘ (ASCII hyphen).",
    key: "giS3",
  },
  {
    liData:
      "name – the name of the component you want. Given the namespace segment mentioned above, this is just the simple name.",
    key: "giS4",
  },
  {
    liData:
      "revision – components typically have some differentiator like a version or commit id. Use that here. If this segment is omitted, the latest revision is used (if that makes sense for the provider).",
    key: "giS5",
  },
];

const giLiData = giSegments.map((data) => {
  return (
    <li className={classes.giLiData} key={data.key}>
      {data.liData}{" "}
    </li>
  );
});

const cldParaRest = `In order to use ClearlyDefined’s data (whether through the REST API or
  the Web UI), it’s critical to understand how to find a component in
  the data. ClearlyDefined uses a system of coordinates to navigate to
  data about particular components.`;

const cldParaTwo = `Typical coordinates that you will encounter are a five part path-like
structure as follows:`;

const GiCoOrdinates = () => {
  return (
    // MAIN SECTION
    <div className={`${classes["gico-container"]} spacing`}>
      {/* USD CONTAINER */}

      <div className={classes.usdContainer}>
        <img src={GiNav} alt="Navbar" />
      </div>

      {/* CLEARLY DEFIND COORDINATES DIV */}

      <div className={classes.cldContainer}>
        <h2>ClearlyDefined Coordinates</h2>
        <p className={classes.commonPara}>{cldParaRest}</p>

        <h3>Why?</h3>
        <p className={classes.commonPara}>{cldParaTwo}</p>

        <div className={classes.inputDiv}>
          <img src={UrlOne} alt="url" />
        </div>

        <p className={classes.commonPara}>Or, more generally:</p>

        <div className={classes.inputDiv}>
          <img src={UrlTwo} alt="url" />
        </div>

        <div className={classes.giSegments}>
          <p className={classes.commonPara}>
            Where the segments have the following values:
          </p>

          <ul>{giLiData}</ul>
        </div>
      </div>
    </div>
  );
};

export default GiCoOrdinates;

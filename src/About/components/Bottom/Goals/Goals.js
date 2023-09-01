import classes from "./Goals.module.css";
import image from "../../../../../src/Images/people.png";

const Goals = () => {
  return (
    <div className={`${classes.communityContainer} spacing`}>
      <div className={`${classes.container}`}>
        <div className={classes.communityContent}>
          <div className={classes.goalContent}>
            <div>
              <h3>Goals</h3>
            </div>
            <div>
              {" "}
              <h2>
                This is a community-wide challenge that needs a community-wide
                approach.
              </h2>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
            </div>
            <a href="/#">Learn more</a>
          </div>
          <div className={classes.leftTop}></div>
          <div className={classes.rightTop}></div>
          <div className={classes.rightBottom}></div>
        </div>
        {/* IMAGE CONTAINER */}

        <div className={classes.imgContainer}>
          {/* IMAGE */}
          <img src={image} alt="people" height="100%" />

          <div className={classes.imgLeftTop}></div>

          <div className={classes.leftBottom}>
            <div className={classes.leftBottomTop}></div>
            <div className={classes.leftBottomBottom}>
              <div className={classes.leftBottomBottomLeft}></div>
              <div className={classes.leftBottomBottomRight}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;

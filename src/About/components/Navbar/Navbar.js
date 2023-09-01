import { Fragment, useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import login from "../../../../src/Images/Login.png";
import brand from "../../../../src/Logo/brand/brand.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    window?.addEventListener("resize", () => setWidth(window?.innerWidth));
    if (width >= 770) setMenuToggle(false);
    // return () => window?.removeEventListener("resize");
  }, [width]);

  function handleMenuToggler() {
    return setMenuToggle((menuToggle) => !menuToggle);
  }
  return (
    <Fragment>
      <div className={`${classes["upper-nav"]} spacing`}>
        <ul>
          <li>
            <Link to="/about">FAQ</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about/get-involved">Get Involved</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">Contact</Link>
          </li>
        </ul>
        <ul className={classes.loginLogo}>
          <li>
            <Link to="/about">
              <img src={login} alt="Login" />
            </Link>
          </li>
        </ul>
      </div>

      {/* LOWER NAVBAR */}
      <nav className={`${classes["lower-navbar"]} spacing`}>
        <div className={classes["titleName"]}>
          <ul>
            <li>
              <Link to="/about">
                <img src={brand} alt="brand" className={classes.brandName} />
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes.mobileMenu}>
          <div
            className={menuToggle ? `${classes.hambMenu}` : classes.navItems}
          >
            <ul>
              <li>
                <Link to="/about">Harvest</Link>
              </li>
              <li>
                <Link to="/about">Documentation</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about">Stats</Link>
              </li>
            </ul>
          </div>
          <div className={classes.hamburg}>
            <span onClick={handleMenuToggler}>
              <span>{menuToggle ? <CloseIcon /> : <MenuIcon />}</span>
            </span>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

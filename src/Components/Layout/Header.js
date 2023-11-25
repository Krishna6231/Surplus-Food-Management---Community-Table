import { Fragment } from "react";
import mainheaderImage from "./headerBanner.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
// import ico from '../Cart/ico.png';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className="icon"></div><h1>Community Table</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

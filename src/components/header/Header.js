import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";
import { Fragment } from "react";
import logo from "../../meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderButton onClick={props.onShowCart}></HeaderButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={logo} />
      </div>
    </Fragment>
  );
};

export default Header;

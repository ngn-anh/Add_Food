import { useContext, React, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <CartIcon className={classes.icon}></CartIcon>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;

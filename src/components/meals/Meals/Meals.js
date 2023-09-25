import { Fragment } from "react";
import MealAvailable from "./MealAvailable";
import MealSummary from "./MealSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealSummary></MealSummary>
      <MealAvailable></MealAvailable>
    </Fragment>
  );
};

export default Meals;

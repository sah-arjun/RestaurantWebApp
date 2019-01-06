import React, { Component } from "react";

import Menu from "./Menu";
import { DISHES } from "../shared/dishes";
import DishDetail from "./Dishdetail";
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Menu
            dishes={this.state.dishes}
            onClick={dishId => this.onDishSelect(dishId)}
          />
          <DishDetail
            dish={
              this.state.dishes.filter(
                dish => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;

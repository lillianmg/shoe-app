import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import MainNav from "../navs/MainNav";
import featuredShoe from "./maroon-white-kyrie-max.png";

class Header extends Component {
  render() {
    return (
      <div className="header-bg">
        <MainNav />
        <div className="row">
          <div className="col-md-6 header header-img">
            <img
              className="featured-shoe"
              src={featuredShoe}
              alt="black white red jay"
            />
          </div>
          <div className="col-md-6 header header-text">
            <h1>
              HOT
              <br />
              DROPS
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
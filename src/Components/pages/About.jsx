import React from "react";
import "./About.scss";
import img from "../../assets/img/van-background (1).png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="about">
        <img className="about-img" src={img} alt="" />
        <div className="container about-container">
          <div className="about-text">
            <h1 className="heading">
              Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="primary-text about-ordinary-text">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p className="primary-text about-ordinary-text">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="about-destination">
            <h1 className="destination-text">
              Your destination is waiting. <br /> Your van is ready.
            </h1>
            <Link to='/vans'> <Button
              colour="rgba(255, 255, 255, 1)"
              backgroundColor="rgba(22, 22, 22, 1)"
            >
              Explore our vans
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

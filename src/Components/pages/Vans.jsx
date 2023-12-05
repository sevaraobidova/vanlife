import React, { useState, useEffect } from "react";
import "./Vans.scss";
import Button from "../Button/Button";
// index.js or another entry point file
import { makeServer } from "../../../service";
import { Link } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [originalVans, setOriginalVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setOriginalVans(data.vans);
      });
  }, []);

  const filterVans = (vanItem) => {
    const updateItems = vanItem
      ? originalVans.filter((curItem) => curItem.type === vanItem)
      : originalVans; 
    setVans(updateItems);
  };

  return (
    <div>
      <section className="vans">
        <div className="container van-container">
          <h1 className="heading">Explore our van options</h1>
          <div className="vans-filter">
            <div className="buttons">
              <Button
                colour="rgba(77, 77, 77, 1)"
                backgroundColor="rgba(255, 234, 208, 1)"
                onClick={() => filterVans("simple")}
              >
                Simple
              </Button>
              <Button
                colour="rgba(77, 77, 77, 1)"
                backgroundColor="rgba(255, 234, 208, 1)"
                onClick={() => filterVans("luxury")}
              >
                Luxury
              </Button>
              <Button
                colour="rgba(77, 77, 77, 1)"
                backgroundColor="rgba(255, 234, 208, 1)"
                onClick={() => filterVans("rugged")}
              >
                Rugged
              </Button>
            </div>
            <p className="clear-button" onClick={()=>setVans(originalVans)}>Clear filters</p>
          </div>
          <div className="van-cards">
            {vans.map((van) => (
              <div key={van.id} className="van-title">
                <Link to='/vans'>
                <img className="van-img" src={van.imageUrl} alt="" />
                <div className="van-info">
                  <h3 className="van-card-title">{van.name}</h3>
                  <p className="van-card-price">
                    ${van.price} <span>/day</span>
                  </p>
                </div>
                <button className={`van-type-button ${van.type} selected`}>
                  {van.type}
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

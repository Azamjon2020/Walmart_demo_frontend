import React from "react";
import "./Games.css";
import { gamesItem, winterItem } from "../../data/NavbarData";
function Games() {
  return (
    <>
      <div className="games">
        <div className="games__wrapper">
          <div className="games__title">
            <h2>Get ready for game day</h2>
          </div>
          <div className="games__collections">
            {gamesItem?.map((gamesItem, index) => (
              <div key={index}>
                <img src={gamesItem.img} alt="" />
                <h1>{gamesItem.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="games">
        <div className="games__wrapper">
          <div className="games__title">
            <h2>Winter savings</h2>
          </div>
          <div className="games__collections">
            {winterItem?.map((winterItem, index) => (
              <div key={index}>
                <img src={winterItem.img} alt="" />
                <h1>{winterItem.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <h6 className="furniture__header">Save on furniture</h6>
      </div>
    </>
  );
}

export default Games;

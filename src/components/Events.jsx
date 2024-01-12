import React from "react";
import "./Events.css";
import Event1 from "../img/event1.png";
import Event2 from "../img/event2.png";

const Events = () => {
  return (
    <section className="events-container">
      <div className="text-main">
        <div className="athletes-text">
          <h1>Events</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
        </div>
      </div>

      {/* section1 */}
      <div className="section1-container">
        <div className="section1-subcontainer">
          <div className="section-img">
            <img src={Event1} alt="" />
          </div>
          <div className="section-content">
            <h1>Brooklyn Simmons</h1>
            <p>
              Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
              without sugar.
            </p>
          </div>
        </div>
        <div className="section1-subcontainer">
          <div className="section-img">
            <img src={Event2} alt="" />
          </div>
          <div className="section-content">
            <h1>Brooklyn Simmons</h1>
            <p>
              Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
              without sugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

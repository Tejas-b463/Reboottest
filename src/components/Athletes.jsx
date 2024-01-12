import React from "react";
import "./Athlets.css";
import Athletes1 from "../img/athletes1.png";
import Athletes2 from "../img/athletes2.png";
import Athletes3 from "../img/athletes3.png";

const Athletes = () => {
  return (
    <section className="athletes-container">
      <div className="text-main">
        <div className="athletes-text">
          <h1>athletes</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
        </div>
      </div>

      {/* athletes section */}
      <div className="athlets-section">
        {/* 1 */}
        <div className="athletes-sub">
          <div>
            <img src={Athletes1} alt="" />
          </div>
          <div className="athletes-content">
            <h1>Brooklyn Simmons</h1>
            <p>
              Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
              without sugar.
            </p>
            <button>learn more</button>
          </div>
        </div>
        {/* 2 */}
        <div className="athletes-sub">
          <div>
            <img src={Athletes1} alt="" />
          </div>
          <div className="athletes-content">
            <h1>Brooklyn Simmons</h1>
            <p>
              Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
              without sugar.
            </p>
            <button>learn more</button>
          </div>
        </div>
        {/* 3 */}
        <div className="athletes-sub">
          <div>
            <img src={Athletes2} alt="" />
          </div>
          <div className="athletes-content">
            <h1>Brooklyn Simmons</h1>
            <p>
              Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
              without sugar.
            </p>
            <button>learn more</button>
          </div>
        </div>
        {/* 4 */}
        <div className="athletes-sub">
          <div>
            <img src={Athletes3} alt="" />
          </div>
          <div className="athletes-content">
            <h1>Brooklyn Simmons</h1>
            <p>
              Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
              without sugar.
            </p>
            <button>learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Athletes;

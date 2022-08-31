import React from "react";
import "./Skillbar.css";

function Skillbar() {
  return (
    <div className="skillBar">
      <div className="Bar">
        <div className="info">
          <span>HTML</span>
        </div>
        <div className="progress-line html">
          <span></span>
        </div>
      </div>

      <div className="Bar">
        <div className="info">
          <span>CSS</span>
        </div>
        <div className="progress-line css">
          <span></span>
        </div>
      </div>

      <div className="Bar">
        <div className="info">
          <span>Bootstrap</span>
        </div>
        <div className="progress-line bootstrap">
          <span></span>
        </div>
      </div>

      <div className="Bar">
        <div className="info">
          <span>JavaScript</span>
        </div>
        <div className="progress-line javascript">
          <span></span>
        </div>
      </div>

      <div className="Bar">
        <div className="info">
          <span>React js</span>
        </div>
        <div className="progress-line react-js">
          <span></span>
        </div>
      </div>

      <div className="Bar">
        <div className="info">
          <span>Node js</span>
        </div>
        <div className="progress-line node-js">
          <span></span>
        </div>
      </div>

      <div className="Bar">
        <div className="info">
          <span>Python</span>
        </div>
        <div className="progress-line python">
          <span></span>
        </div>
      </div>

      <div className="Bar">
        <div className="info">
          <span>Git</span>
        </div>
        <div className="progress-line git">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Skillbar;

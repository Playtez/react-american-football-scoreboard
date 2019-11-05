import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [value, setValue] = useState(1);
  const [quarter, setQuarter] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{value}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <button
        className="buttons"
        onClick={() => setValue(value === 4 ? value * 0 + 1 : value + 1)}>
        Away Downs
      </button>
      <button
        className="buttons"
        onClick={() =>
          setQuarter(quarter === 4 ? quarter * 0 + 1 : quarter + 1)
        }>
        Quarter
      </button>
    </div>
  );
};

export default BottomRow;

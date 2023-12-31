import React from "react";
import trash from "./assets/trash.png";
import check from "./assets/check.png";

const AffectAll = ({ clearAll, completeAll }) => {
  return (
    <div className="affect-all">
       <div>
       <p>Toggle all</p>
       </div>
        <button onClick={completeAll}>
          <img src={check} alt="" />
        </button>
        <button onClick={clearAll}>
          <img src={trash} alt="" />
        </button>
    </div>
  );
};

export default AffectAll;

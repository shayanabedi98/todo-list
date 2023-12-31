import React from "react";
import trash from "./assets/trash.png";
import check from "./assets/check.png";

const AffectAll = ({ clearAll, completeAll }) => {
  return (
    <div className="affect-all list">
     <div>
        <div></div>
        <div>
        <button onClick={completeAll}>
        <img src={check} alt="" />
      </button>
      <button onClick={clearAll}>
        <img src={trash} alt="" />
      </button>
        </div>
     </div>
    </div>
  );
};

export default AffectAll;

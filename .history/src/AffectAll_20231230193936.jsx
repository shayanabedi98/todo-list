import React from "react";


const AffectAll = ({ clearAll, completeAll }) => {
  return (
    <div className="affect-all">
      <button onClick={completeAll}></button>
      <button onClick={clearAll}></button>
    </div>
  );
};

export default AffectAll;

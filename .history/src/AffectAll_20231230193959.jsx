import React from "react";


const AffectAll = ({ clearAll, completeAll }) => {
  return (
    <div className="affect-all">
      <button onClick={completeAll}>Complete all</button>
      <button onClick={clearAll}>Delete all</button>
    </div>
  );
};

export default AffectAll;

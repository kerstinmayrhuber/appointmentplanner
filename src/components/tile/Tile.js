import React from "react";

export const Tile = ({ tileName, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{tileName}</p>
      {description.map((item) =>
        (<p className="tile">{item}</p>)
      )}
    </div>
  );
};

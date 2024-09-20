import React from "react";
import Tile from "../../components/tile/Tile";


export const TileList = (tileListArray) => {
  return (
    <div><ul >
      {tileListArray.map((objectOfArray, index) => (
        const [name, ...rest] = objectOfArray;
      ))}
    </ul>
    </div>

  );
};

import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = ({ contacts }) => {
  const tileListResorted = contacts.map(({ name, ...description }) => (
    {
      tileName: name,
      description: Object.values(description)
    }
  ));

  return (
    <div>
      <ul>
        {tileListResorted.map((tile, index) => (
          <li key={index}>
            <Tile tileName={tile.tileName} description={tile.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};
import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

function DraggableColorList({ colors, deleteColor }) {
  console.log(colors);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => deleteColor(color.name)}
        />
      ))}
    </div>
  );
}

export default SortableContainer(DraggableColorList);

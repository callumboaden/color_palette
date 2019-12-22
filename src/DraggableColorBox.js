import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { SortableElement } from 'react-sortable-hoc';
import chroma from "chroma-js";

const styles = {
  root: {
    display: "inline-block",
    position: "relative",
    width: "20%",
    height: "25%"
  },
  boxContent: {
    color: props =>
      chroma(props.color).luminance() <= 0.09 ? "white" : "black",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  }
};

function DraggableColorBox(props) {
    console.log(props)
  const { classes, name, color, handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span> {name}</span>
        <DeleteRoundedIcon onClick={handleClick} />
      </div>
    </div>
  );
}

export default SortableElement(withStyles(styles)(DraggableColorBox));

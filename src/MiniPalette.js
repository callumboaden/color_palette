import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends Component {
  constructor(props) {
    super(props);

    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(e) {
      e.stopPropagation();
      this.props.handleDelete(this.props.id)
  }
  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        className={classes.miniColorBox}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ));
    return (
      <div className={classes.root} onClick={this.props.handleClick}>
        <DeleteRoundedIcon
          className={classes.deleteButton}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {" "}
          {paletteName} <span className={classes.emoji}> {emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);

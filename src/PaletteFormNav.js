import React, { Component } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import PaletteMetaForm from "./PaletteMetaForm";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    this.state = { newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      palettes,
      handleSubmit
    } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar className={classes.toolbar}>
            <div className={classes.menu}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Create A Palette</Typography>
            </div>
            <div className={classes.nav}>
              <PaletteMetaForm
                newPaletteName={newPaletteName}
                classes={classes}
                palettes={palettes}
                handleSubmit={handleSubmit}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav;

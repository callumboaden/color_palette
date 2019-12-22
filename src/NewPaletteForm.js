import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import DraggableColorBox from "./DraggableColorBox";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      currentColor: "teal",
      colors: [],
      newName: ""
    };

    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.state.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleChange(e) {
    this.setState({ newName: e.target.value });
  }

  handleChangeComplete = (color, event) => {
    this.setState({ currentColor: color.hex });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName
    };
    this.setState({ colors: [...this.state.colors, newColor], newName: '' });
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h5">Design your palette</Typography>
          <div className={classes.drawerBody}>
            <div>
              <Button variant="contained" color="secondary">
                Add Palette
              </Button>
              <Button variant="contained" color="primary">
                Random Color
              </Button>
            </div>
            <ChromePicker
              className={classes.colorPicker}
              onChangeComplete={this.handleChangeComplete}
              color={this.state.currentColor}
            />
            <ValidatorForm
              ref="form"
              onSubmit={this.addNewColor}
              onError={errors => console.log(errors)}
            >
              <TextValidator
                onChange={this.handleChange}
                name="email"
                value={this.state.newName}
                validators={["required", "isColorNameUnique", "isColorUnique"]}
                errorMessages={[
                  "Enter a color name",
                  "Color name must be unique",
                  "Color already used!"
                ]}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ backgroundColor: this.state.currentColor }}
              >
                Add Color
              </Button>
            </ValidatorForm>
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {this.state.colors.map(color => (
            <DraggableColorBox color={color.color} name={color.name} />
          ))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);

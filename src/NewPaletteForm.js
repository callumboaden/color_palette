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
import DraggableColorList from "./DraggableColorList";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { arrayMove } from 'react-sortable-hoc';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      currentColor: "teal",
      colors: [],
      newColorName: "",
      newPaletteName: ""
    };

    this.addNewColor = this.addNewColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== this.state.newPaletteName.toLowerCase()
      )
    );
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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

  handleSubmit() {
    let newName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
    });
  }

  deleteColor(colorName) {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    });
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
            <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator
                onChange={this.handleChange}
                name="newPaletteName"
                value={this.state.newPaletteName}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter a color name",
                  "Palette name already used!"
                ]}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleSubmit}
              >
                Save Palette
              </Button>
            </ValidatorForm>
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
                name="newColorName"
                onChange={this.handleChange}
                value={this.state.newColorName}
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
          <DraggableColorList
            colors={this.state.colors}
            deleteColor={this.deleteColor}
            onSortEnd={this.onSortEnd}
            axis="xy"
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);

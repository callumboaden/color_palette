import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);

    this.state = { stage: "form", newPaletteName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== this.state.newPaletteName.toLowerCase()
      )
    );
  }

  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmit(newPalette);
    this.setState({ stage: '' });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  render() {
    console.log(this.props);
    const { classes, hideForm } = this.props;
    return (
      <div>
        <Dialog open={this.state.stage === "emoji"}>
          <DialogTitle id="emoji-dialog-title">
            Choose a Palette Emoji
          </DialogTitle>
          <Picker onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={this.state.stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogTitle id="form-dialog-title">
              Choose a Palette Name
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Make sure
                it's unique!
              </DialogContentText>
              <TextValidator
                className={classes.paletteNameInput}
                label="Palette Name"
                onChange={this.handleChange}
                name="newPaletteName"
                value={this.state.newPaletteName}
                validators={["required", "isPaletteNameUnique"]}
                fullwidth
                margin="normal"
                errorMessages={[
                  "Field cannot be empty",
                  "Palette name already used!"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button
                className={classes.savePaletteButton}
                variant="contained"
                color="primary"
                type="submit"
              >
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;

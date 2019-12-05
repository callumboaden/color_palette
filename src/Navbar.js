import React, { Component } from 'react';

import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';

import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: 'hex', open: false };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
       this.setState({ open: false });

    }
    handleChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }
    render() {  
        const { level, changeLevel } = this.props; 
        return ( 
            <div className="Navbar">
                <div className="logo">
                    <a href="#">Color Picker</a>
                </div>
                <div className="slider-container">
                    <span>Level: { level }</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    onClose={this.handleClose}
                    message={<span id="message-id">{`Format changed to ${this.state.format.toUpperCase()}`}</span>}
                    action={[
                        <IconButton color="inherit">
                            <CloseIcon onClick={this.handleClose} />
                        </IconButton>,
                    ]}
                />
            </div>
         );
    }
}
 
export default Navbar;
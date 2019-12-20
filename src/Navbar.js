import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyles'

import 'rc-slider/assets/index.css';



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
        const { level, changeLevel, showSlider, classes } = this.props; 
        return ( 
            <div className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">Color Picker</Link>
                </div>
                { showSlider && (
                    <div>
                        <span>Level: { level }</span>
                        <div className={classes.slider}>
                            <Slider 
                                defaultValue={level} 
                                min={100} 
                                max={900}
                                step={100}
                                onChange={changeLevel}
                            />
                        </div>
                    </div>
                )}
                <div className={classes.selectContainer}>
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
 
export default withStyles(styles)(Navbar);
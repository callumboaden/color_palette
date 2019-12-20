import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles.js';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' };

        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({ level: level })
    }
    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const { classes } = this.props;
        const { colors, paletteName, emoji, id  } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]}
                name={color.name}
                colorId={color.id}
                paletteId={id}
                showingFullPalette
            />
        ));
        return (
            <div className={classes.Palette}>
                <Navbar 
                    level={level}
                    format={format}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showSlider
                />
                <div className={classes.PaletteColors}>
                
                    { colorBoxes }

                </div>
                <PaletteFooter
                    paletteName={paletteName}
                    paletteEmoji={emoji}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);
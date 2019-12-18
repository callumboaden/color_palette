import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

import './Palette.css';

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
        const { colors, paletteName, emoji, id  } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]}
                name={color.name}
                colorId={color.id}
                paletteId={id}
                showFullPalette
            />
        ));
        return (
            <div className="Palette">
                <Navbar 
                    level={level}
                    format={format}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showSlider
                />
                <div className="Palette-colors">
                
                    { colorBoxes }

                </div>
                <Footer
                    paletteName={paletteName}
                    paletteEmoji={emoji}
                />
            </div>
        )
    }
}

export default Palette;
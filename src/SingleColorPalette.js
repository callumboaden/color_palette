import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = { format: 'hex' };

        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.gatherShades = this.gatherShades.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    
    changeFormat(val) {
        this.setState({ format: val });
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        // return all shades of given color

        return shades.slice(1);
    }
    render() { 
        console.log(this.props)
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]} 
                showingFullPalette={false}
            />
        ));
        return ( 
            <div className="SingleColorPalette Palette">
                <Navbar 
                    showSlider={false} 
                    handleChange={this.changeFormat}
                />
                <div className="Palette-colors">
                    { colorBoxes }

                    <div className="go-back">
                        <Link to={`/palette/${id}`} className="go-back-button">Go Back</Link>
                    </div>

                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
         );
    }
}
 
export default SingleColorPalette;
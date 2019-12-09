import React, { Component } from 'react';
import axios from 'axios';

class PaletteGenerator extends Component {
    static defaultProps = {
        proxy: 'https://cors-anywhere.herokuapp.com/'
    }
    constructor(props) {
        super(props);

        this.state = { colors: [] };
    }
    render() { 
        return ( 
            <div className="PaletteGenerator">
                <h1>Palette Generator</h1>

                <button onClick={this.generateColors}>Generate</button>
            </div> 
        );
    }
}
 
export default PaletteGenerator;
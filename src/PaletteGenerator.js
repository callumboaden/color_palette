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
    getColors() {
        var proxy = "https://cors-anywhere.herokuapp.com/";
        var url = `${proxy}http://colormind.io/api/`;
        var data = {
            model : "default",
            input : [[44,43,44],[90,83,82],"N","N","N"]
        }

        var http = new XMLHttpRequest();

        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                var palette = JSON.parse(http.responseText).result;
                // console.log(palette)
            }
        }
        console.log(data);
        http.open("POST", url, true);
        http.send(JSON.stringify(data));
    }
    render() { 
        return ( 
            <div className="PaletteGenerator">
                <h1>Palette Generator</h1>

                <button onClick={this.getColors}>Generate</button>
            </div> 
        );
    }
}
 
export default PaletteGenerator;
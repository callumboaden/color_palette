import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() { 
        return (  
            <div className="Footer">
                <span>{this.props.paletteName}</span>
                <span>{this.props.paletteEmoji}</span>
            </div>
        );
    }
}
 
export default Footer;
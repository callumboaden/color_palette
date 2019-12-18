import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        const { paletteName, emoji } = this.props;
        return (  
            <div className="Footer">
                <span>{ paletteName }</span>
                <span>{ emoji }</span>
            </div>
        );
    }
}
 
export default Footer;
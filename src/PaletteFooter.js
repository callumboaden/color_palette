import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

class PaletteFooter extends Component {
    render() {
        const { paletteName, emoji, classes } = this.props;
        return (  
            <div className={classes.Footer}>
                <span>{ paletteName }</span>
                <span>{ emoji }</span>
            </div>
        );
    }
}
 
export default withStyles(styles)(PaletteFooter);
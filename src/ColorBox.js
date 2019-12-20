import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = { copied: false }

        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState() {
       this.setState({ copied: true}, () => {
           setTimeout(() => this.setState({ copied: false }), 1500)
       })   
    }
    render() {
        const { copied } = this.state;
        const { name, background, paletteId, colorId, showingFullPalette, classes  } = this.props;
        return (
            <CopyToClipboard text={ background } onCopy={this.changeCopyState}>
                <div style={{ background: background }} className={classes.ColorBox}>
                    <div 
                        style={{ background: background }} 
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} 
                    />
                    <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`} >
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{ background }</p>
                    </div>
                    <div className="copy-container">
                        <div className={classes.boxContent}>
                            <span>{ name }</span>
                        </div>  
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {
                        showingFullPalette && (
                            <Link 
                                to={`/palette/${paletteId}/${colorId}`} 
                                onClick={e => e.stopPropagation()}>
                                    <span className={classes.seeMore}>More</span>
                            </Link>
                        )
                    } 
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)
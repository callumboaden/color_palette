import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import chroma from 'chroma-js'
import './ColorBox.css'

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            transition: ".5s",
            opacity: "1",
        } 
    },
    copyText: {
        color: props => 
            chroma(props.background).luminance() >= 0.6 ? "black" : "white"
    },
    colorName: {
        color: props => 
            chroma(props.background).luminance() <= 0.09 ? "white" : "black"
    },
    seeMore: {
        color: props => 
            chroma(props.background).luminance() >= 0.6 ? "black" : "white",
        position: "absolute",
        padding: "10px",
        textTransform: "uppercase",
        fontSize: "12px",
        background: "rgba(255, 255, 255, .3)",
        letterSpacing: "1px",
        bottom: "0",
        right: "0"
    },
    copyButton: {
        color: props => 
            chroma(props.background).luminance() >= 0.6 ? "black" : "white",
        width: "100px",
        height: "30px",
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        background: "rgba(255, 255, 255, 0.3)",
        cursor: "pointer",
        border: "0",
        fontSize: "1rem",
        lineHeight: "30px",
        textAlign: "center",
        textTransform: "uppercase",
        textDecoration: "none",
        opacity: "0",
    },
    boxContent: {
        color: props => 
            chroma(props.background).luminance() <= 0.09 ? "white" : "black",
        position: "absolute", 
        left: "0",
        bottom: "0",
        padding: "10px",
        letterSpacing: "1px",
        textTransform: "uppercase",  
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transform: "scale(0.1)",
        transition: "transform .6s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "2.5rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "#FFFFFF",
        "& h1": {
            fontWeight: "400",
            textAlign: "center",
            padding: "1rem",
            marginBottom: "0",
            textTransform: "uppercase",
            textShadow: "1px 2px #000",
            background: "rgba(255, 255, 255, .2)",
            width: "100%"
        }
    },
    showCopyMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.25s ease-in-out",
        transitionDelay: ".25s"
    }
}

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
import sizes from './sizes';
import chroma from 'chroma-js';

export default {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            transition: ".5s",
            opacity: "1",
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => (props.showingFullPalette ? "20%" : "33.33333%")
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => (props.showingFullPalette ? "10%" : "20%")
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => (props.showingFullPalette ? "5%" : "10%")
        },
        
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
            fontSize: "5rem",
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
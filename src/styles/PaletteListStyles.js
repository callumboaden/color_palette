import sizes from './sizes';
import bg from './bg.svg';
export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: "0",
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        backgroundColor: "#6beeff",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover", 
        /* background by SVGBackgrounds.com */
        overflow: "scroll",  
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%", 
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "baseline",
        "& a": {
            textDecoration: "none",
            color: "#e6e6e6"
        },
        "& h1": {
            fontSize: "2rem",
            color: "#00e6ac"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        justifyContent: "center",
        gridGap: "1.5rem",
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 75%)"
        }
    }
}
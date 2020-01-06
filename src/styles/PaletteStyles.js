import sizes from './sizes';
export default {
    Palette:
    {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    PaletteColors: 
    {
        
        height: "90%",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
    },
    goBackButton:
    {
        width: "20%",
        background: "#333",
        position: "relative",
        "& a": {
            color: "white",
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
            textDecoration: "none"
        },
        [sizes.down("lg")]: {
            width: "50%",
            height: "33.333333%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        }
    },

}
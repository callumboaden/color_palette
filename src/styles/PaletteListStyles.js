import sizes from './sizes';
export default {
    root: {
        backgroundColor: "white",  
        height: "100vh",
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
            color: "#4d4d4d"
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
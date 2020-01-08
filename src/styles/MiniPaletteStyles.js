
export default {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        background: "#FFFFFF",
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: "grey",
        height: "150px",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem"
    },
    deleteButton: {
        position: "absolute",
        top: 0,
        right: 0,
        background: 'red',
        color: 'white',
        padding: '.25rem',
        zIndex: 99,
        opacity: 0,
        transition: ".25s"
    },
    miniColorBox: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"
    }
}
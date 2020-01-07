import sizes from './sizes';
export default {
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-handle, .rcSliderHandle:active, .rcSliderHandle:focus, .rcSliderHandle:hover" : 
        {
            backgroundColor: "green",
            outline:"none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        },
        [sizes.down("md")]: {
            width: "140px"
        }
    },
    Navbar: 
    {
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "6vh",
    },
    logo:
    {
        marginRight: "20px",
        "& a": {
            background: "rgb(230, 230, 230)",
            padding: "20px",
            fontSize: "1.1rem",
            textDecoration: "none",
            color: "#333333"
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    selectContainer: 
    {
        marginLeft: "auto",
        marginRight: "20px"
    }
}
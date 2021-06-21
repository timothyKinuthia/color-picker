import chroma from 'chroma-js';
import sizes from '../styles/sizes'

export default {
    ColorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: 1
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => (props.showingFullPalette ? "20%" : "33.3333%")
        },
        [sizes.down("sm")]: {
            width: "50%",
            height: props => (props.showingFullPalette ? "10%" : "50%")
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showingFullPalette ? "5%" : "10%"
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.5)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.5)" : "white",
        height: "30px",
        width: "100px",
        display: "inline-block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: 0
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        height: "100%",
        width: "100%",
        transform: "scale(0.1)",
        transition: "transform 0.5s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",    
        top: "0", 
        bottom: "0", 
        right: "0",   
        left: "0",    
        display: "flex", 
        alignItems: "center",   
        justifyContent: "center",   
        fontSize: "4rem",
        transform: "scale(0.1)", 
        opacity: "0",
        color: "white", 
        flexFlow: "column",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            fontSize: "4rem"
        },
        [sizes.down("xs")]: {
            fontSize: "5rem"
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    showMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all .4s ease-in-out",
        transitionDelay: ".3s"
    }
}
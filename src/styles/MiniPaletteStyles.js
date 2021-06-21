export default {
    root: {
        backgroundColor: "white",
        height: "190px",
        border: "1px solid grey",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: "1"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "140px",
        width: "100%",
        border: "1px solid grey",
        borderRadius: "5px",
        overflow: "hidden",
        //marginBottom: "0.5rem"
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
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },

    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-5.5px"
    },
    delete: {

    },

    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        //padding: "20px",
        zIndex: "100",
        opacity: "0",
    }
}
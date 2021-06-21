import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import styles from '../styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete'


class MiniPalette extends Component {

    deletePalette = e => {
        e.stopPropagation();
        this.props.handleDialogueOpen(this.props.id);
    }
    render() {
        const { classes, paletteName, emoji, colors, goToPallete } = this.props;
        const miniColorBoxes = colors.map(color => (
            <div className={classes.miniColor} style={{ background: color.color }} key={color.name} ></div>
        ))
        return (
            <div onClick={goToPallete} className={classes.root} >
                <DeleteIcon onClick={this.deletePalette} className={classes.deleteIcon} style={{ transition: "all 0.3s ease-in-out" }} />
                <div className={classes.colors} >{miniColorBoxes}</div>
                <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span> </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette)
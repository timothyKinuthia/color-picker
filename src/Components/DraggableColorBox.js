import React from 'react';
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/DraggableColorBoxStyles'


const DraggableColorBox = SortableElement(props => {
    const { classes, name, handleClick } = props;
    return (
        <div className={classes.root} >
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon onClick={handleClick} className={classes.DeleteIcon} />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox)

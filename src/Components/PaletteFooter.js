import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteFooterStyles';

const PaletteFooter = props => {
    const { paletteName, emoji, classes } = props;
    return (
        <div>
            <footer className= {classes.PaletteFooter}>
                {paletteName}
                <span className={classes.emoji} >{emoji}</span>
            </footer>    
        </div>
    )
}

export default withStyles(styles)(PaletteFooter)

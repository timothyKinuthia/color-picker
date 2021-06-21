import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import styles from '../styles/PaletteFormNavStyles';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

class PaletteFormNav extends Component {
    state = {
        newPaletteName: "",
        formShowing: false
    }



    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    showForm = () => {
        this.setState({formShowing: true})
    }
    hideForm = () => {
        this.setState({formShowing: false})
    }
    render() {
        const { classes, open, palettes, handleSubmit } = this.props;
        return (
            <div className={classes.root} >
                <CssBaseline />
                <AppBar
                    position="fixed"
                    color="default"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open
                    })}
                    >
                    <Toolbar>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.handleDrawerOpen}
                        edge="start"
                            className={clsx(classes.menuButton, { [classes.hide]: open })}
                        >
                        <AddToPhotosIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            create a palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns} >
                        <Link to='/' ><Button variant="contained" color="secondary" className={classes.button} >Go back</Button></Link>
                        <Button className={classes.button} onClick={this.showForm} variant="contained" color="primary">
                            save
                        </Button>
                    </div>
                </AppBar>
                {this.state.formShowing && (<PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />)}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);

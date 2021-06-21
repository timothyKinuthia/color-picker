import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";


class PaletteList extends Component {

    state = {
        open: false,
        deletingId: ""
    }

    handleDialogueOpen = id => {
        this.setState({ open: true, deletingId: id })
    }
    handleDialogueClose = () => {
        this.setState({open: false, deletingId: "" })
    }

    goToPallete = id => {
        this.props.history.push(`/palette/${id}`)
    }

    handleDelete = () => {
        this.props.deletePalette(this.state.deletingId)
        this.handleDialogueClose()
    }

    // removePalette = id => {
    //     this.props.deletePalette(id)
    // }
    render() {
        const { palettes, classes } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root} >
                <div className={classes.container} >
                    <nav className={classes.nav} >
                        <h1 className={classes.heading} >React colors</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {
                            palettes.map(palette => (<CSSTransition
                                key={palette.id}
                                classNames="fade"
                                timeout={1000} >
                                <MiniPalette {...palette}
                                    goToPallete={() => this.goToPallete(palette.id)}
                                    id={palette.id} key={palette.id} handleDialogueOpen={this.handleDialogueOpen}/>
                                </CSSTransition>))
                        }
                    </TransitionGroup>
                </div> 
                <Dialog open={open}  onClose={this.handleDialogueClose} aria-labelledby="delete-dialog-tittle">
                    <DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete} >
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}} >
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete">Delete</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText onClick={this.handleDialogueClose} primary="Cancel">Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)

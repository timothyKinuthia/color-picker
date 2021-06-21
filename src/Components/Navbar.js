import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "rc-slider/assets/index.css";
import Slider from 'rc-slider';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/NavbarStyles';

class Navbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         format: "hex", open: false
      }
    }

    handleFormatChange = e => {
        this.setState({ format: e.target.value, open: true })
        this.props.handleChange(e.target.value)
    }
    closeSnackBar = () => {
        this.setState({ open: false })
    }
    
    render() {
        const { level, changeLevel, classes } = this.props;
        const { format } = this.state;
        return (
            <header className={classes.Navbar} >
                <div className={classes.logo} >
                    <Link to='/'>reactcolorpicker</Link>
                </div>{
                    this.props.showingAllColors && (
                        <div>
                            <span>Level: {level}</span>
                            <div className={classes.slider} >
                                <Slider default={level} min={100} max={900} onAfterChange={changeLevel} step={100} />
                            </div>
                        </div>
                    )
                }
                <div className={classes.selectContainer} >
                    <Select onChange={this.handleFormatChange} >
                        <MenuItem value={format} >HEX - #ffffff </MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255) </MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0) </MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={this.state.open} autoHideDuration={3000} message={<span id="message-id" >Format Changed To {format.toUpperCase()} </span>} ContentProps={{ "aria-describedby": "message-id" }} onClose={this.closeSnackBar} action={[<IconButton onClick={this.closeSnackBar} color='inherit' key='close' aria-label='close'>
                    <CloseIcon/>
                </IconButton>]} />
            </header>
        )
    }
}

export default withStyles(styles)(Navbar)

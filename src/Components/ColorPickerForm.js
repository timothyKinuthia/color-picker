import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { Button, } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import styles from '../styles/ColorPickerFormStyles'

class ColorPickerForm extends Component {
    state = {
        currentColor: "teal",
        newColorName: ""
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            return this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        })

        ValidatorForm.addValidationRule('isColorUnique', value => {
            return this.props.colors.every(({ color }) => color !== this.state.currentColor)
        })
    }

    updateCurrentColor = newColor => {
        this.setState({currentColor: newColor.hex})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({newColorName: ""})
    }
    render() {
        const { paletteFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div>
                <ChromePicker className={classes.picker} color={currentColor} onChangeComplete={this.updateCurrentColor} />
                <ValidatorForm onSubmit={this.handleSubmit} ref="form">
                    <TextValidator margin="normal" variant="filled" className={classes.colorNameInput} name="newColorName" value={newColorName} onChange={this.handleChange} validators={["required", "isColorNameUnique", "isColorUnique"]} errorMessages={["Enter color name", "color name must be unique", "color already used"]} placeholder="Color Name">
                    </TextValidator>
                    <Button className={classes.addColor} type="submit" variant="contained" color="primary" style={{ backgroundColor: paletteFull ? "grey" : currentColor }} disabled={paletteFull} >{paletteFull ? "palette Full" : "add color"}</Button>
                </ValidatorForm> 
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)

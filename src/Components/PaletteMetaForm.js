import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
    state = {
        stage: "form",
        newPaletteName: ""
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('PaletteNameUnique', value => {
            return this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase() )
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClickOpen = () => {
      this.setState({open: true})
    };
  
    handleClose = () => {
      this.setState({open: false})
    };

    showEmojiPicker = () => {
        this.setState({stage: "emoji"})
    }

    savePalette = emoji => {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette)
    }
    render() {
        const { newPaletteName } = this.state;
        const { hideForm } = this.props;
        return (
            <>
            <Dialog open={this.state.stage === "emoji"} onClose={hideForm}>
                <DialogTitle id="form-dialog-title">Choose Palette emoji</DialogTitle>
                <Picker title="Pick a palette emoji" onSelect={this.savePalette} />
            </Dialog>
            <Dialog open={this.state.stage === "form"} onClose={hideForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
                <ValidatorForm onSubmit={this.showEmojiPicker}>
                <DialogContent>
                <DialogContentText>
                    Please enter a name for your new beautiful palette. Make sure it is unique
                </DialogContentText>
                <TextValidator label="Palette Name" value={newPaletteName} onChange={this.handleChange} name="newPaletteName" validators={["required", "PaletteNameUnique"]} errorMessages={["name is required", "palette name already taken"]} fullWidth margin="normal"/>
                </DialogContent>
                <DialogActions>
                <Button onClick={hideForm} color="primary">
                    Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">save palette</Button>
                </DialogActions>
                </ValidatorForm>
            </Dialog>
            </>
        )
    }
}

export default PaletteMetaForm

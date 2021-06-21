import React, { Component } from 'react'
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button, } from '@material-ui/core';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from '../styles/NewPaletteFormStyles'

class NewPaletteForm extends Component {
  static defaultProps = {
    maxLength: 20
  }
    state = {
        open: false,
        colors: this.props.palettes[0].colors,

    }
    handleDrawerOpen = () => {
        this.setState({open: true})
    };
    handleDrawerClose = () => {
        this.setState({open: false})
    };

    addNewColor = newColor => {
        this.setState({ colors: [...this.state.colors, newColor], })
    }
    handleSubmit = (newPalette) => {
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
        newPalette.colors = this.state.colors
        this.props.savePallete(newPalette);
        this.props.history.push('/')
      }   
    removeColor = colorName => {
        this.setState({colors: this.state.colors.filter(color => color.name !== colorName)  })
    }
    
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => {
          return { colors: arrayMove(colors, oldIndex, newIndex) }
        })
    }
    
    clearPalette = () => {
      this.setState({colors: []})
    }
    randomColor = () => {
      const allColors = this.props.palettes.map(pal => pal.colors).flat();

      const rdc = Math.floor(Math.random() * allColors.length) + 1;
      this.setState({colors: [...this.state.colors, allColors[rdc]]})
    }  

  render() {
        const { classes, maxLength, palettes, } = this.props;
        const { colors, open } = this.state;
        const paletteFull = colors.length >= maxLength;
        return(
          <div>
              <PaletteFormNav open={open} palettes={palettes} handleSubmit={this.handleSubmit} handleDrawerOpen={this.handleDrawerOpen} />
              
              <div className={classes.root}>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.container} >
                  <Typography variant="h4" style={{ fontSize: "1.3rem" }}>Design Your Palette</Typography>
                  <div className={classes.buttons} >
                  <Button className={classes.button} onClick={this.clearPalette} variant="contained" color="secondary">clear palette</Button>
                  <Button  className={classes.button} onClick={this.randomColor} variant="contained" color="primary" disabled={paletteFull}>random color</Button>   
                  </div>
                  <ColorPickerForm paletteFull={paletteFull} addNewColor={this.addNewColor} colors={colors} />
                </div>
              </Drawer>
              <main
              className={clsx(classes.content, {
                  [classes.contentShift]: this.state.setStateopen,
              })}
              >
            
              <div className={classes.drawerHeader} />
              <DraggableColorList colors={this.state.colors} removeColor={this.removeColor} axis="xy" onSortEnd={this.onSortEnd}/>
              </main>
               </div>
           </div >
       )
    }
    
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);

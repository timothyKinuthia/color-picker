import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';



class Palette extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        level: 500, format: "hex"
      }
    }
    changeLevel = newLevel => {
        this.setState({ level: newLevel })
        console.log(newLevel)
    }

    changeFormat = val => {
        this.setState({format: val})
    }
    
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showingFullPalette />)
        return (
            <div className= {classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors />
                <div className= {classes.colors}>{colorBoxes}</div>
                {/* <footer className="palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
        </footer> */}
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette)

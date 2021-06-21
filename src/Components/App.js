import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Palette from './Palette';
import seedColors from '../seedColors';
import { generatePalette } from '../colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
    constructor(props) {
      super(props)
      const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
      this.state = {
         palettes: savedPalettes || seedColors
      }
    }
    findPalette = id => {
        return this.state.palettes.find(function (palette) {
            return palette.id === id
        })
    }
    getPallete = props => {
        return <Palette palette={generatePalette(this.findPalette(props.match.params.id))}/>
    }
    
    savePallete = newPallete => {
        this.setState({palettes: [...this.state.palettes, newPallete] }, this.syncLocalStorage)
    }

    syncLocalStorage() {
        //save to local storage
        window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
    }

    deletePalette = id => {
        this.setState(prevState => ({palettes: prevState.palettes.filter(pal => pal.id !== id)}), this.syncLocalStorage)
    }

    render() {
        //const { colors } = this.state.palettes;
        return (
        
            <Switch>
                <Route exact path='/palette/new' render={routeProps => <NewPaletteForm savePallete={this.savePallete}  {...routeProps} palettes={this.state.palettes}/>} />
                
                <Route exact path='/' render={routeProps => <PaletteList palettes={this.state.palettes} {...routeProps} deletePalette={this.deletePalette} />} />
                
                <Route exact path='/palette/:id' render={this.getPallete} /> 

                <Route exact path='/palette/:paletteId/:colorId' render={routeProps => <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId} />} />
                
            </Switch>
        )
    }
}

export default App

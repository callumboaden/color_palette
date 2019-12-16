import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import PaletteGenerator from './PaletteGenerator';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.findPallete = this.findPallete.bind(this);
  }
  findPallete(id){
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
              <Route 
                exact path="/" 
                render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} 
              />
             
              <Route 
                exact 
                path="/palette/:id"
                render={routeProps => (
                  <Palette 
                    palette={generatePalette(
                      this.findPallete(routeProps.match.params.id)
                      )} 
                    />
                )}
              />
              <Route 
                path="/palette/:paletteId/:colorId" 
                render={routeProps => (
                  <SingleColorPalette
                    colorId={routeProps.match.params.colorId} 
                    palette={generatePalette(
                      this.findPallete(routeProps.match.params.paletteId)
                      )} 
                    />
                )}
              />
              
              <Route 
                exact path="/generator"
                render={() => <PaletteGenerator />}
              />
              
      </Switch>


/*       <div className="App">
        <Palette 
          palette={generatePalette(seedColors[4])}
          paletteName={seedColors[4].paletteName}
          paletteEmoji={seedColors[4].emoji}
        />
      </div> */
    );
  }
}

export default App;

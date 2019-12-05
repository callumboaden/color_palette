import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    return (
      <Switch>
              <Route 
                exact path="/" 
                render={() => <h1>Palette Links here</h1>} 
              />
              <Route 
                exact path="/palette/:id"
                render={() => <h1>Pallete goes here</h1>}
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

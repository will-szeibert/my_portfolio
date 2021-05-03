import React from 'react'
import MainHeading from './heading_footer/MainHeading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgramMain from './programmingLink/ProgramMain';
import Home from './home/Home';

import GeologyMain from './geology/GeologyMain';
import Shop from './shop/Shop';
function App() {
  return (
    <div >
      <Router>
        <MainHeading />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/program'>
            <ProgramMain  />
          </Route>
          <Route path='/geology'>
            <GeologyMain />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

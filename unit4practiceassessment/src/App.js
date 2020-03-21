import React from 'react';
import NavBar from './NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Video from './components/Video/Video'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route path={"/video/:id"}>
        <Video/>
      </Route>
      <Route path={"/about"}>
        <About/>
      </Route>
      <Route exact path={"/"}>
        <Home/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {


  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress}  key="general" pageSize={6} category="general" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress}  key="business" pageSize={6} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress}  key="entertainment" pageSize={6} category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress}  key="health" pageSize={6} category="health" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress}  key="sports" pageSize={6} category="sports" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress}  key="science" pageSize={6} category="science" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress}  key="technology" pageSize={6} category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

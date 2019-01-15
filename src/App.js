import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Skill from "./Components/Skills";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/skills" exact component={Skill} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

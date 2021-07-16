import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
// import BrandsPage from "./BrandsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Importing Components
import Brand from "./componets/brands/Brand";
import Models from "./componets/models/Models";
import Tires from "./componets/tires/Tires";
//import "./componets/table.css";
import Makers from "./componets/makers/Makers";
import Sizes from "./componets/sizes/Sizes";

function App() {
  return (
    <Router>
      <div className="App-brand">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/brands" component={Brand} />
          <Route path="/models_tires" component={Tires} />
          <Route path="/models" component={Models} />
          <Route path="/makers" component={Makers} />
          <Route path="/sizes" component={Sizes} />
        </Switch>
      </div>
    </Router>
  ); //react routes for other page
}
//console.log(process.env.React_APP_BASE_URL);
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;

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
import { BrandProvider } from "./componets/context/BrandContext";
import { MakerProvider } from "./componets/makerContext/MakerContext";
import { SizeProvider } from "./componets/SizeContext/sizeContext";
import { ModelProvider } from "./componets/ModelContext/modelContext";
import { TiresProvider } from "./componets/TiresContext/tireContext";
function App() {
  return (
    <div className="App-brand">
      <BrandProvider>
        <MakerProvider>
          <SizeProvider>
            <ModelProvider>
              <TiresProvider>
                <Router>
                  <Nav />
                  <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/brands" component={Brand} />
                    <Route path="/models_tires" component={Tires} />
                    <Route path="/models" component={Models} />
                    <Route path="/makers" component={Makers} />
                    <Route path="/sizes" component={Sizes} />
                  </Switch>
                </Router>
              </TiresProvider>
            </ModelProvider>
          </SizeProvider>
        </MakerProvider>
      </BrandProvider>
    </div>
  );
}

export default App;

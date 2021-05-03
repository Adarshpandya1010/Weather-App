import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from "./component/CountryDetails";
import CapitalDetails from "./component/CapitalDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/countryDetails"
            component={CountryDetails}
          ></Route>
          <Route
            exact
            path="/capitalDetails"
            component={CapitalDetails}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

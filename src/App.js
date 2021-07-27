import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HashSection from "./components/HashSection/HashSection";
import Block from "./components/Block/Block";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HashSection />
          </Route>
          <Route exact path="/block">
            <Block />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

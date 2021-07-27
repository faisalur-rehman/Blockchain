import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HashSection from "./components/HashSection/HashSection";
import Block from "./components/Block/Block";
import BlockChain from "./components/BlockChain/BlockChain";
import Distributed from "./components/Distributed/Distributed";
import Tokens from "./components/Tokens/Tokens";
import Coinbase from "./components/Coinbase/Coinbase";

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
          <Route exact path="/blockchain">
            <BlockChain />
          </Route>
          <Route exact path="/distributed">
            <Distributed />
          </Route>
          <Route exact path="/tokens">
            <Tokens />
          </Route>
          <Route exact path="/coinbase">
            <Coinbase />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

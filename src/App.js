import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HashSection from "./components/HashSection/HashSection";
import Distributed from "./components/Distributed/Distributed";
import Tokens from "./components/Tokens/Tokens";
import { useCrypto } from "./hooks/useCrypto";
import Block from "./components/Block/Block";
import BlockChain from "./components/BlockChain/Blockchain";
import Coinbase from "./components/Coinbase/Coinbase";
import KeysHeader from "./components/Keys/KeysHeader/KeyHeader";
import KeyPairs from "./components/Keys/KeyPairs/KeyPairs";
import Signatures from "./components/Keys/Signatures/Signatures";
import Transaction from "./components/Keys/Transaction/Transaction";
import Blockchain from "./components/Keys/Blockchain/Blockchain";

function App() {
  const [calcHash] = useCrypto();

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <HashSection calcHash={calcHash} />
          </Route>
          <Route exact path="/block">
            <Header />
            <Block />
          </Route>
          <Route exact path="/blockchain">
            <Header />
            <BlockChain />
          </Route>
          <Route exact path="/distributed">
            <Header />
            <Distributed />
          </Route>
          <Route exact path="/tokens">
            <Header />
            <Tokens />
          </Route>
          <Route exact path="/coinbase">
            <Header />
            <Coinbase />
          </Route>
          <Route exact path="/key">
            <KeysHeader />
            <KeyPairs />
          </Route>
          <Route path="/key/signatures">
            <KeysHeader />
            <Signatures />
          </Route>
          <Route path="/key/transaction">
            <KeysHeader />
            <Transaction />
          </Route>
          <Route path="/key/blockchain">
            <KeysHeader />
            <Blockchain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HashSection from "./components/HashSection/HashSection";
import Distributed from "./components/Distributed/Distributed";
import Tokens from "./components/Tokens/Tokens";
import { useCrypto } from "./hooks/useCrypto";
import Block from "./components/Block/Block";
import BlockChain from "./components/BlockChain/Blockchain";
import Coinbase from "./components/Coinbase/Coinbase";
import KeysHeader from "./components/Keys/KeysHeader/KeyHeader";
import Signatures from "./components/Keys/Signatures/Signatures";
import Transaction from "./components/Keys/Transaction/Transaction";
import KeyPair from "./components/Keys/KeyPairs/KeyPair";
import KeyBlockchain from "./components/Keys/Blockchain/KeyBlockchain";

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
          <Route path="/block">
            <Header />
            <Block calcHash={calcHash} />
          </Route>
          <Route path="/blockchain">
            <Header />
            <BlockChain />
          </Route>
          <Route path="/distributed">
            <Header />
            <Distributed />
          </Route>
          <Route path="/tokens">
            <Header />
            <Tokens />
          </Route>
          <Route path="/coinbase">
            <Header />
            <Coinbase />
          </Route>
          <Route exact path="/key">
            <KeysHeader />
            <KeyPair />
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
            <KeyBlockchain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

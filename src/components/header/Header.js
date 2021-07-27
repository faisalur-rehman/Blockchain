import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              BlockChain Demo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto d-flex mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Hash
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/block">
                    Block
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./blockchain.html">
                    Blockchain
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./distributed.html">
                    Distributed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./tokens.html">
                    Tokens
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./coinbase.html">
                    Coinbase
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

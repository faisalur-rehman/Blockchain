import React from "react";
import { Link } from "react-router-dom";

const KeysHeader = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/key">
              Blockchain Demo: Public / Private Keys & Signing
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto d-flex mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/key" class="nav-link active" aria-current="page">
                    Keys
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/key/signatures" class="nav-link">
                    Signatures
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/key/transaction" class="nav-link">
                    Transaction
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/key/blockchain" class="nav-link">
                    Blockchain
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default KeysHeader;

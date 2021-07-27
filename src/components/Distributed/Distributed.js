import React from "react";
import Peer from "./Peer/Peer";

const Distributed = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="scrolling-wrapper">
          <h2>Peer A</h2>
          <div className="container1">
            <Peer />
            <Peer />
            <Peer />
            <Peer />
            <Peer />
          </div>
        </div>
        <div className="scrolling-wrapper">
          <h2>Peer B</h2>
          <div className="container1">
            <Peer />
            <Peer />
            <Peer />
            <Peer />
            <Peer />
          </div>
        </div>
        <div className="scrolling-wrapper">
          <h2>Peer C</h2>
          <div className="container1">
            <Peer />
            <Peer />
            <Peer />
            <Peer />
            <Peer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Distributed;

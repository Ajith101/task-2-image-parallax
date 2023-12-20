import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 px-0">
            <Header />
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Game from "./Components/Game";
import Footer from "./Components/Footer";

const  App= () =>{
  return (
    <React.Fragment>
      <div className="ctr">
        <Game />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;

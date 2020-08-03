import React from "react";
import "./App.css";
import "normalize.css";
import "./generalStyles/typography.css";
import "./generalStyles/flexClasses.css";
import ContentContainer from "./ContentContainer";

function App() {
  return (
    <div className="app">
      <ContentContainer className="app__content" />
    </div>
  );
}

export default App;

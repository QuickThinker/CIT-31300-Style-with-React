import React from 'react';
import RecTangle from "./components/Rectangle";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <RecTangle/>
      <Block borderColor={"blue"} backgroundColor={"red"}/>
        <Block borderColor={"green"} backgroundColor={"blue"}/>
        <Block borderColor={"red"} backgroundColor={"green"}/>
    </div>
  );
}

export default App;

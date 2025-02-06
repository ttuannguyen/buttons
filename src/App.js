import { useState } from "react";
import Button from "./Button";

function App() {
  return (
    <>
      <div>
        <div><Button>Click me!!</Button></div>
        <div><Button>Buy now!!</Button></div>
        <div><Button>See deal!!</Button></div>
        <div><Button>Hide ad!!</Button></div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Button from "./Button";

function App() {
  return (
    <>
      <div>
        <div>
          <Button success primary rounded outline>Click me!!</Button>
        </div>
        <div>
          <Button danger outline>Buy now!!</Button>
        </div>
        <div>
          <Button warning>See deal!!</Button>
        </div>
        <div>
          <Button secondary outline>Hide ad!!</Button>
        </div>
        <div>
          <Button secondary rounded>Hide ad!!</Button>
        </div>
      </div>
    </>
  );
}

export default App;

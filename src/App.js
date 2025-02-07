import { useState } from "react";
import { GoBell, GoChecklist, GoBug, GoBroadcast  } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <>
      <div>
        <div>
          <Button success rounded outline>
            <GoBell />
            Click me!!
          </Button>
        </div>
        <div>
          <Button danger outline>
            <GoChecklist />
            Buy now!!
          </Button>
        </div>
        <div>
          <GoBug />
          <Button warning>See deal!!</Button>
        </div>
        <div>
          <Button secondary outline>
            <GoBroadcast />
            Hide ad!!
          </Button>
        </div>
        <div>
          <Button primary rounded>
            Something!
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { GoBell, GoChecklist, GoBroadcast } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("click!");
  };

  return (
    <>
      <div>
        <div>
          <Button
            success
            rounded
            outline
            className="mb-5"
            onClick={handleClick}
          >
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

export default ButtonPage;
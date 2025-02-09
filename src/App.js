import { useState } from "react";
import { GoBell, GoChecklist, GoBroadcast } from "react-icons/go";
import Button from "./components/Button";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 2,
      label: 'Can I use Javascript on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 3,
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];
  
  return <Accordion items={items} />;
}

export default App;

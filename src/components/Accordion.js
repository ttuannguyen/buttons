import React from "react";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;

//   const handleClick = () => {
//     console.log("click!");
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <Button
//             success
//             rounded
//             outline
//             className="mb-5"
//             onClick={handleClick}
//           >
//             <GoBell />
//             Click me!!
//           </Button>
//         </div>
//         <div>
//           <Button danger outline>
//             <GoChecklist />
//             Buy now!!
//           </Button>
//         </div>
//         <div>
//           <Button warning>See deal!!</Button>
//         </div>
//         <div>
//           <Button secondary outline>
//             <GoBroadcast />
//             Hide ad!!
//           </Button>
//         </div>
//         <div>
//           <Button primary rounded>
//             Something!
//           </Button>
//         </div>
//       </div>
//     </>
//   );

};

export default Accordion;

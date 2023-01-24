import React from "react";

const ChangeMessageState = ({ handleMessages }) => {
  const messages = 
  [ "Oi", 
    "Olá", 
    "Oi, tudo bem?"
];

  return (
    <div>
      <button onClick={() => handleMessages(messages[0])}>1</button>
      <button onClick={() => handleMessages(messages[1])}>2</button>
      <button onClick={() => handleMessages(messages[2])}>3</button>
    </div>
  );
};

export default ChangeMessageState;

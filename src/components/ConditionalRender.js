import React, { useState } from "react";

const ConditionalRender = () => {
  let [x, setX] = useState(true);

  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/*&& é um if / else reduzido (É uma condicional SIMPLES*/}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}

      <h1>If ternário</h1>

      {name === "João" ? (
        <div>
          <p>o Nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("William")}>Alterar o nome</button>

      <button onClick={() => setX("false")}>Alterar x para false</button>
    </div>
  );
};

export default ConditionalRender;

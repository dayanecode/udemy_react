import { useState } from "react";

// Função para renderizar uma lista na página
const ListRender = () => {
  //array lista de dados de nomes
  const [list] = useState(["Day", "Nat", "Miii", "Thiago"]);

  //Exemplo de um array de objetos onde temos uma chave única
  const [users, setUsers] = useState([
    { id: 1, name: "Day", age: 30 },
    { id: 2, name: "Nat", age: 38 },
    { id: 3, name: "Mii", age: 32 },
  ]);

  // Função para deletar um usuário aleatoriamente
  const deleteRandom = () => {
    // criação de um numero(id) aleatório baseado no tamanho da minha lista
    const randomNumber = Math.floor(Math.random() * 4); //randown precisa ter parenteses porque é a execução de um método.
    // Executa a função contendo o resultado anterior (que é o atual por enquanto) e faz a manipulação em cima dele
    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <div>
        <ul>
          {" "}
          {/*Inicialização de dados dinâmicos*/}
          {list.map((item) => (
            <li>{item}</li>
          ))}{" "}
          {/* Utilizar o index do map não é uma boa prática*/}
        </ul>
        <ul>
          {/*A key é a chave única do item iterado*/}
          {users.map((user) => (
            <li key={user.id}>
              {/*impressão dos dados*/}
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </div>
  );
};

export default ListRender;

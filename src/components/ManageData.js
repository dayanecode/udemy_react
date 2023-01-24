import { useState} from "react"

const ManageData = () => {
  let someData =10; //Algum dado da variável
  
  //Hook
  //number é o valor inicial
  //setNumber é o método (função)
  //15 é o valor de number
  
  const [number, setNumber] = useState(15);
  
  console.log(number);

    return (
    <div>
        <div>
            <p>valor: {someData}</p> {/*Vai imprimir o valor da variável na tela que é 10*/}
            <button onClick={() => (someData = 15)}>Mudar variável</button> {/*Não muda o valor da variável na renderização.. isso é um problema!*/}
        </div>
        <div>
            <p>Valor: {number}</p> {/*Vai imprimir o valor atual do useState na tela*/}
            <button onClick={() => setNumber(25)} >Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData


import './App.css';
import City from "./assets/city.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender' 
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function showMessage (){
  console.log("Evento componente pai")
}


function App() {

  // const name = "Dayane"
  const [userName] = useState("Maria")
  
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Verde", newCar: false, km: 4500},
    {id: 3, brand: "Fiat", color: "Azul", newCar: true, km: 0},
    ]

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
  setMessage(msg);
  };

  const pessoas = [
    {id: 1, name: "Dayane Ramos" , age: 30, occupation: "Gerente"},
    {id: 2, name: "Nathalia" , age: 18, occupation: "Advogada"},
    {id: 3, name: "William" , age: 38, occupation: "Técnico de Futsal"},
    {id: 4, name: "Rogerio Nunes" , age: 17, occupation: "Estagiário"},
  ]

  
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
        <ManageData />
        <ListRender />  
        <ConditionalRender />
        {/* props*/}
        <ShowUserName name={userName}/>
        
        {/* destructuring - trabalhando com várias propriedades setadas no componente*/}
        {/* Valores numéricos são passados entre chaves {123456}*/}
        {/* o nome das propriedades do componente deve ser o mesmo nome informado nas props do objeto*/}
        <CarDetails brand="VW" km={100000} color="azul" newCar={false} />
        
        {/*reaproveitando componentes*/}
        <CarDetails brand="Ford" color="vermelha" km={0} newCar={true} />
        <CarDetails brand="Chevrolet" color="branca" km={4500} newCar={false} />
        
        {/*loop em array de objetos utilizando o método map*/}
        {cars.map((car) => (    
          <CarDetails 
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}          
          />
        ))}

        {/* Fragment: Não tem pai, ou seja componente sem <div> </div>*/}
        <Fragment propFragment="teste" />
        
        {/* children prop: Quando o componente precisa ter JSX dentro dele ou seja conteúdo HTML dentro dele */}
        
        <Container myValue="Testing">
        <p>Este é o conteúdo</p>  
        </Container>

        <Container myValue="Testing 2">
        <p>Testando container</p>  
        </Container>


      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />

      
      {/* state lift: Elevação de state, um valor é elevado de um componente filho para um componente pai.
        Tenho DOIS COMPONENTES: Um para exibir(consumir) e um para alterar */}
        <Message msg={message} />
        <ChangeMessageState handleMessages={handleMessage} />


        
        {pessoas.map((pessoa) =>
         <UserDetails 
         key={pessoa.id}
         nome={pessoa.name} 
         idade={pessoa.age} 
         profissao={pessoa.occupation} />
        )

        
        }
       
    </div>
  );
}

export default App;

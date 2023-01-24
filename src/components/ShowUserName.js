// Objeto que tem todas as propriedades que eu enviei para o componente
const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário é: {props.name}</h2>    
    </div>
  )
}

export default ShowUserName

//destructuring, se caracteriza pela abertura e o fechamento das chaves (em objetos)
//
const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>            
            <li>Quilometragem: {km}</li>            
            <li>Cor: {color}</li>
        </ul>
            {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails
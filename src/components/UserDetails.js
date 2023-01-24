import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade} anos</p>
        <p>Profissão: {profissao}</p>
        { idade >=18 && <p>Pode tirar carteira de habilitação!</p>}
    </div>
  )
}

export default UserDetails
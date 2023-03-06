import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavUnLogged } from './style'


export const NavUnlogged = () => {
  return (
    <StyledNavUnLogged>
      <Link to='/register'> teste </Link>
      <button> Cadastrar </button>
    </StyledNavUnLogged>
  )
}



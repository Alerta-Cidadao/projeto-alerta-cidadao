import { Link } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from "../../Context/userContext";
import { StyledNavLogged } from '../NavLogged/style'

export const NavLogged = () => {

  const { user, handleLogout } = useContext(UserContext)

  return (
    <StyledNavLogged>
      <Link to="/"> Home </Link>
      <Link to="/new-report"> New Report </Link>
      <Link to={`/dashboard/${user && user.id}`}> Perfil </Link>
      <button onClick={()=>handleLogout()}>  Logout </button>
    </StyledNavLogged>
  )
}



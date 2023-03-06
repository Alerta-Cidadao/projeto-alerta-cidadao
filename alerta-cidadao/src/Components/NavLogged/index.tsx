import { Link } from "react-router-dom";
import { StyledNavLogged } from '../NavLogged/style'

export const NavLogged = () => {
  return (
    <StyledNavLogged>
      <Link to="/home"> Home </Link>
      <Link to="/new-report"> New Report </Link>
      <Link to="/dashboard/:userId"> Perfil </Link>
      <Link to="/home"> Logout </Link>
    </StyledNavLogged>
  )
}

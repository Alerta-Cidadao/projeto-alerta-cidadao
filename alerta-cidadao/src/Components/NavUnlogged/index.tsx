import { Link } from "react-router-dom";
import { StyledNavUnLogged } from "./style";

export const NavUnlogged = () => {
  return (
    <StyledNavUnLogged>
      <Link to="/"> Home </Link>
      <Link to="/new-report"> New Report </Link>
      <Link to="/login">Logar</Link>
      <Link to="/register">Cadastrar</Link>
    </StyledNavUnLogged>
  );
};

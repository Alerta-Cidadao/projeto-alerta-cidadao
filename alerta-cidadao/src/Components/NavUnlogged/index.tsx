import { Link } from "react-router-dom";
import { StyledNavUnLogged } from "./style";

export const NavUnlogged = () => {
  return (
    <StyledNavUnLogged>
      <Link to="/login">Logar</Link>
      <Link to="/register">Cadastrar</Link>
    </StyledNavUnLogged>
  );
};

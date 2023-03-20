import { Link } from "react-router-dom";
import { StyledNavUnLogged } from "./style";

export const NavUnlogged = ({menuVisibility}:any) => {
    return (
        <StyledNavUnLogged>
            <Link to="/" onClick={() => menuVisibility()}> Inicio </Link>
            <Link to="/login" onClick={() => menuVisibility()}> Logar </Link>
            <Link to="/register" onClick={() => menuVisibility()}>Cadastrar</Link>
        </StyledNavUnLogged>
    );
};

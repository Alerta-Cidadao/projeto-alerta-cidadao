import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { StyledNavLogged } from "../NavLogged/style";

export const NavLogged = ({menuVisibility}:any) => {
    const { user, handleLogout } = useContext(UserContext);

    return (
        <StyledNavLogged>
            <Link to="/" onClick={() => menuVisibility()}> Inicio </Link>
            <Link to="/new-report" onClick={() => menuVisibility()}> Novo relato </Link>
            <Link to={`/dashboard/${user && user.id}`} onClick={() => menuVisibility()}> Perfil </Link>
            <button onClick={() => handleLogout()}> Deslogar </button>
        </StyledNavLogged>
    );
};

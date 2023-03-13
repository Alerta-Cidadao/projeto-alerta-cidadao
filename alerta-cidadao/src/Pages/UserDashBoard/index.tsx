import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModalDelete } from "../../Components/ModalDelete";
import { UserCard } from "../../Components/UserCard";
import { UserReportList } from "../../Components/UserReportsList";
import { UserContext } from "../../Context/userContext";
import { StyledUserDashBoard } from "./style";
import { FaRegSun } from "react-icons/fa";
import { ModalUpdate } from "../../Components/ModalUpdate";

export const UserDashBoardPage = () => {
    const { modalDelete, setModalDelete, modalUpdate } =
        useContext(UserContext);
    const [dashboardVisibility, setDashboardVisibility] = useState(
        "container__user-dashboard"
    );

    const toggleModalDashboardList = () => {
        dashboardVisibility == "container__user-dashboard-hidden"
            ? setDashboardVisibility("container__user-dashboard")
            : setDashboardVisibility("container__user-dashboard-hidden");
    };
    return (
        <StyledUserDashBoard>
            <UserCard />
            {modalDelete ? <ModalDelete /> : null}
            {modalUpdate ? <ModalUpdate /> : null}
            <UserReportList />

            <button
                className="btn-config"
                onClick={() => toggleModalDashboardList()}
            >
                <FaRegSun color="#FFF" size={30} />
            </button>
            <div className={dashboardVisibility}>
                <div className="content-dashboard">
                    <p
                        onClick={() => toggleModalDashboardList()}
                        className="close-modal"
                    >
                        {" "}
                        x
                    </p>
                    <h2> Configurações da conta: </h2>
                    <Link to=""> Atualizar informações </Link>
                    <Link to=""> Meus posts </Link>
                    <Link to=""> Notificações </Link>
                    <button onClick={() => setModalDelete(true)}>
                        {" "}
                        Deletar conta
                    </button>
                </div>
            </div>
        </StyledUserDashBoard>
    );
};

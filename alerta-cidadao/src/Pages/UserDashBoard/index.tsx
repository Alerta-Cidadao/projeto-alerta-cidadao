import { useContext, useState } from "react";
import { ModalDelete } from "../../Components/ModalDelete";
import { UserReportList } from "../../Components/UserReportsList";
import { UserContext } from "../../Context/userContext";
import { StyledUserDashBoard } from "./style";

export const UserDashBoardPage = () => {
    const { modalDelete, setModalDelete } = useContext(UserContext);
    const [dashboardVisibility, setDashboardVisibility] = useState(
        "container__user-dashboard"
    );

    return (
        <StyledUserDashBoard>
            {modalDelete ? <ModalDelete /> : null}
            <UserReportList />

            <button className="btn-config"
                onClick={() =>
                    dashboardVisibility == "container__user-dashboard-hidden"
                        ? setDashboardVisibility("container__user-dashboard")
                        : setDashboardVisibility(
                              "container__user-dashboard-hidden"
                          )
                }
            > Configurações
                {" "}
            </button>
            <div className={dashboardVisibility}>
                <h2> Configurações da conta: </h2>
                <button> Atualizar informações </button>
                <button> Meus posts </button>
                <button> Reações </button>
                <button> Notificações </button>
                <button onClick={() => setModalDelete(true)}>
                    {" "}
                    Deletar conta
                </button>
            </div>
        </StyledUserDashBoard>
    );
};

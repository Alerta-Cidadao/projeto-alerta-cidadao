import { useContext, useState } from "react";
import { ModalDelete } from "../../Components/ModalDelete";
import { UserReportList } from "../../Components/UserReportsList";
import { UserContext } from "../../Context/userContext";
import { StyledUserDashBoard } from "./style";

export const UserDashBoardPage = () => {
    const { modalDelete, setModalDelete } = useContext(UserContext);

    return (
        <StyledUserDashBoard>
            {modalDelete ? <ModalDelete /> : null}
            <UserReportList />
            <button onClick={() => setModalDelete(true)}>Deletar</button>
        </StyledUserDashBoard>
        
    );
};

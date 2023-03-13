import { useContext, useState } from "react";
import { ModalDelete } from "../../Components/ModalDelete";
import { ModalUpdate } from "../../Components/ModalUpdate";
import { UserReportList } from "../../Components/UserReportsList";
import { UserContext } from "../../Context/userContext";
import { StyledUserDashBoard } from "./style";

export const UserDashBoardPage = () => {
    const { modalDelete, setModalDelete, modalUpdate, setModalUpdate } =
        useContext(UserContext);

    return (
        <StyledUserDashBoard>
            {modalDelete ? <ModalDelete /> : null}
            {modalUpdate ? <ModalUpdate /> : null}
            <UserReportList />
            <button onClick={() => setModalDelete(true)}>Deletar</button>
            <button onClick={() => setModalUpdate(true)}>Atualizar</button>
        </StyledUserDashBoard>
    );
};

import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import {ModalDeleteBtnDelete, ModalDeleteContainer, ModalDeleteDiv, ModalDeleteText} from "./style"

export function ModalDelete() {
    const { deleteUser, setModalDelete } = useContext(UserContext);

    function deleteOnClick() {
        deleteUser();
    }

    return (
        <>
        <ModalDeleteContainer>
        <ModalDeleteDiv>
            <ModalDeleteText>Voce tem certeza que deseja deletar sua conta?</ModalDeleteText>
            <ModalDeleteBtnDelete onClick={() => deleteOnClick()}>Deletar conta</ModalDeleteBtnDelete>
            <ModalDeleteBtnDelete onClick={() => setModalDelete(false)}>Cancelar</ModalDeleteBtnDelete>
        </ModalDeleteDiv>
        </ModalDeleteContainer>
        </>
    );
}

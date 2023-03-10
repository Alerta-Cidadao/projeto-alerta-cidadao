import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

export function ModalDelete() {
    const { deleteUser, setModalDelete } = useContext(UserContext);

    function deleteOnClick() {
        deleteUser();
        console.log();
    }

    return (
        <div>
            <dialog>
                Voce tem certeza que deseja deletar sua conta?
                <button onClick={() => deleteOnClick}>Deletar conta</button>
                <button onClick={() => setModalDelete(false)}>Cancelar</button>
            </dialog>
        </div>
    );
}

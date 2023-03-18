import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

export function ModalUpdate() {
    const { setModalUpdate } = useContext(UserContext);

    return (
        <div>
            <p>Formulário pra atualizar o user aqui</p>
            <button onClick={() => setModalUpdate(false)}>Cancelar</button>
        </div>
    );
}

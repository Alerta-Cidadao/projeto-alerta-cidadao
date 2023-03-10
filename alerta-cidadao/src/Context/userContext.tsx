import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../Services/fakeApi";
import {
    IChildrenProps,
    ILoginFormData,
    IRegisterFormData,
    IReport,
    IUser,
} from "./@types";

interface IUserContext {
    user: IUser | null;
    reports: IReport[];
    filteredReports: IReport[];
    setFilterReports: React.Dispatch<React.SetStateAction<string>>;
    handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
    handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogout: () => void;
    handleSubmitNewReport: (formData: IReport) => Promise<void>;
    deleteUser: () => Promise<void>;
    modalDelete: boolean;
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
    const [user, setUser] = useState(null as IUser | null);
    const [reports, setReports] = useState([] as IReport[]);
    const [filterReports, setFilterReports] = useState("");
    const [modalDelete, setModalDelete] = useState(false);

    const navigate = useNavigate();

    const getReportsList = async () => {
        try {
            const response = await baseURL.get(`/reports`);
            setReports(response.data);
        } catch (error) {
            console.error("error");
        }
    };

    const autoLogin = async (userId: string | null, token: string) => {
        try {
            const response = await baseURL.get(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
            navigate("/");
        } catch (error) {
            localStorage.removeItem("@USERTOKEN");
            localStorage.removeItem("@USERID");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("@USERTOKEN");
        const userId = localStorage.getItem("@USERID");
        if (token) {
            autoLogin(userId, token);
        }
        getReportsList();
    }, []);

    const handleSubmitLogin = async (formData: ILoginFormData) => {
        const toastLogin = toast.loading("Efetuando login");
        try {
            const response = await baseURL.post("/login", formData);
            localStorage.setItem("@USERTOKEN", response.data.accessToken);
            localStorage.setItem("@USERID", response.data.user.id);
            setUser(response.data.user);
            toast.update(toastLogin, {
                render: `Bem vindo ${response.data.user.name}`,
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            navigate(`/`);
        } catch (error) {
            toast.update(toastLogin, {
                render: `Erro ao efetuar o login reveja suas informações`,
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const handleSubmitRegister = async (formData: IRegisterFormData) => {
        const toastRegister = toast.loading("Efetuando cadastro");
        try {
            const response = await baseURL.post("/register", formData);
            toast.update(toastRegister, {
                render: "Cadastro realizado com sucesso",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            navigate(`/login`);
        } catch (error) {
            toast.update(toastRegister, {
                render: "Erro ao efetuar o cadastro reveja suas informações",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("@USERTOKEN");
        localStorage.removeItem("@USERID");
        setUser(null);
        navigate("/");
    };

    const handleSubmitNewReport = async (formData: IReport) => {
        const userId = localStorage.getItem("@USERID");
        const token = localStorage.getItem("@USERTOKEN");

        const toastNewReport = toast.loading("Efetuando cadastro");
        try {
            const response = await baseURL.post("/reports", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.update(toastNewReport, {
                render: "Reclamação registrada!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });

            setReports([...reports, response.data]);
        } catch (error) {
            toast.update(toastNewReport, {
                render: "Erro ao efetuar a reclamação confira as informações e tente novamente.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const deleteUser = async () => {
        const userId = localStorage.getItem("@USERID");
        const token = localStorage.getItem("@USERTOKEN");
        const toastDelete = toast.loading("Deletando sua conta");
        try {
            const response = await baseURL.delete(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(null);
            toast.update(toastDelete, {
                render: "Conta deletada",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        } catch (error) {
            console.error(error);
            toast.update(toastDelete, {
                render: "Erro ao deletar a conta tente novamente",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const filteredReports = reports.filter(
        (report) =>
            report.title
                ?.toLowerCase()
                .includes(filterReports?.toLowerCase().trim()) ||
            report.state
                ?.toLowerCase()
                .includes(filterReports?.toLowerCase().trim()) ||
            report.city
                ?.toLowerCase()
                .includes(filterReports?.toLowerCase().trim())
    );

    return (
        <UserContext.Provider
            value={{
                reports,
                user,
                filteredReports,
                setFilterReports,
                handleSubmitLogin,
                handleSubmitRegister,
                handleLogout,
                handleSubmitNewReport,
                deleteUser,
                modalDelete,
                setModalDelete,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

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
  handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
  handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
  handleLogout: () => void;
  handleSubmitNewReport: (formData: IReport) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [user, setUser] = useState(null as IUser | null);
  const [reports, setReports] = useState([] as IReport[]);

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
      console.log(response);
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
      console.log(response);
      setReports([...reports, response.data]);
    } catch (error) {
      toast.update(toastNewReport, {
        render:
          "Erro ao efetuar a reclamação confira as informações e tente novamente.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };
  return (
    <UserContext.Provider
      value={{
        reports,
        user,
        handleSubmitLogin,
        handleSubmitRegister,
        handleLogout,
        handleSubmitNewReport,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../Services/fakeApi";

export interface IChildrenProps {
  children: React.ReactNode;
}
interface IUser {
  name: string;
  url: string;
}
interface IReport {
  title: string;
  description: string;
  imag: string;
  dat: string;
  problem: string;
  since: string;
  email: string;
  userId: number;
  id: number;
}
interface ILoginFormData {
  email: string;
  password: string;
}
interface IRegisterFormData {
  user: string;
  password: string;
  email: string;
  cidade?: string;
  estado?: string;
}
interface IUserContext {
  user: IUser | null;
  reports: IReport[];
  setReports: React.Dispatch<React.SetStateAction<IReport[]>>;
  handleSubmitLogin: (formData: ILoginFormData) => void;
  handleSubmitRegister: (formData: IRegisterFormData) => void;
  handleLogout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [user, setUser] = useState({} as IUser | null);
  const [reports, setReports] = useState([] as IReport[]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@LOGGEDUSERTOKEN");
    const userId = localStorage.getItem("@USERID");
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await baseURL.get(`/users/${userId}`);
          setUser(response.data);
          setReports(response.data.reports);
          navigate("/home");
        } catch (error) {
          toast.error("error");
        }
      };
      autoLogin();
    }
  }, []);

  const handleSubmitLogin = async (formData: ILoginFormData) => {
    const toastLogin = toast.loading("Efetuando login");
    try {
      const response = await baseURL.post("/login", formData);
      localStorage.setItem("@USERTOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      setReports(response.data.user.reports);
      toast.update(toastLogin, {
        render: `Bem vindo ${response.data.user.name}`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
      navigate(`/home`);
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

  return (
    <UserContext.Provider
      value={{
        user,
        reports,
        setReports,
        handleSubmitLogin,
        handleSubmitRegister,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

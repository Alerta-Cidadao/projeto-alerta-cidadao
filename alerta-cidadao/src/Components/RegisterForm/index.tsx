import { SubmitHandler, useForm } from "react-hook-form";
import { StyledRegisterForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterForm } from "./schema";
import { Input } from "../Input";
import { IRegisterFormData } from "../../Context/@types";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

export const RegisterForm = () => {
  const { handleSubmitRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({ resolver: yupResolver(schemaRegisterForm) });

  const submitRegister: SubmitHandler<IRegisterFormData> = (formData) => {
    handleSubmitRegister(formData);
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submitRegister)}>
      <Input
        label="Name"
        type="text"
        placeholder="Digite seu user name"
        register={register("name")}
        error={errors.email}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        register={register("password")}
        error={errors.password}
      />
      <Input
        label="Confirm password"
        type="password"
        placeholder="Confirme sua senha"
        register={register("confirmpassword")}
        error={errors.confirmpassword}
      />

      <button type="submit">Cadastrar</button>
    </StyledRegisterForm>
  );
};

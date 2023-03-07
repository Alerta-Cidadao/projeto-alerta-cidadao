import { SubmitHandler, useForm } from "react-hook-form";
import { StyledRegisterForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterForm } from "./schema";
import { Input } from "../Input";
import { IRegisterFormData } from "../../Context/@types";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/userContext";
import axios from "axios";

interface IUf {
  id: number;
  nome: string;
  regiao: IRegiao;
  sigla: string;
}

interface IRegiao {
  id: number;
  nome: string;
  sigla: string;
}

interface IMunicipio {
  id: number;
  nome: string;
}

export const RegisterForm = () => {
  const { handleSubmitRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({ resolver: yupResolver(schemaRegisterForm) });
  const [ufs, setUfs] = useState<IUf[]>([]);
  const [municipios, setMunicipios] = useState<IMunicipio[]>([]);
  const [selectedUF, setSelectedUf] = useState("0");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => setUfs(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`
      )
      .then((response) => setMunicipios(response.data));
  }, [selectedUF]);

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
        error={errors.name}
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
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <select
        id="uf"
        {...register("estado")}
        onChange={(event) => {
          setSelectedUf(event?.currentTarget.value);
        }}
      >
        <option value="0">Selecione seu estado</option>
        {ufs.map((uf) => (
          <option key={uf.id} value={uf.sigla}>
            {uf.nome}
          </option>
        ))}
      </select>
      <select id="city" {...register("cidade")}>
        <option value="0">Selecione sua cidade</option>
        {municipios.map((municipio) => (
          <option key={municipio.id} value={municipio.nome}>
            {municipio.nome}
          </option>
        ))}
      </select>
      <button type="submit">Cadastrar</button>
    </StyledRegisterForm>
  );
};

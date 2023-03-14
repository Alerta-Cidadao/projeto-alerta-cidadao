import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, Input, InputLabel, MenuItem } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormData } from "../../Context/@types";
import { UserContext } from "../../Context/userContext";
import { schemaRegisterForm } from "../RegisterForm/schema";
import { StyledRegisterForm, StyledSelect } from "../RegisterForm/style";
import { DivContainer,BtnCloseModalUp } from "./style";


export interface IUf {
    id: number;
    nome: string;
    regiao: IRegiao;
    sigla: string;
}

export interface IRegiao {
    id: number;
    nome: string;
    sigla: string;
}

export interface IMunicipio {
    id: number;
    nome: string;
}

export function ModalUpdate() {
    const { updateUser, setModalUpdate } = useContext(UserContext);
        const { handleSubmitRegister } = useContext(UserContext);
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<IRegisterFormData>({
            resolver: yupResolver(schemaRegisterForm),
        });
        const [ufs, setUfs] = useState<IUf[]>([]);
        const [municipios, setMunicipios] = useState<IMunicipio[]>([]);
        const [selectedUF, setSelectedUf] = useState<string | unknown>("0");
        const [selectedCity, setSelectedCity] = useState<string | unknown>("0");
    
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
    
        const submitRegister: SubmitHandler<IRegisterFormData> = (formData: IRegisterFormData) => {
            handleSubmitRegister(formData);
        };


    return (
        <DivContainer>
            <p>Formulário pra atualizar o user aqui</p>
            <StyledRegisterForm onSubmit={handleSubmit(submitRegister)}>
            <h1> Atualizar </h1>
            <Input
                label="Nome"
                type="text"
                placeholder="Digite seu username"
                register={register("name")}
               
            />
            <Input
                label="Email"
                type="email"
                placeholder="Digite seu email"
                register={register("email")}
               
            />
            <div className="select-location">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Estado
                    </InputLabel>
                    <StyledSelect
                        labelId="demo-simple-select-label"
                        id="uf"
                        {...register("estado")}
                        value={selectedUF}
                        label="Estado"
                        onChange={(event) => {
                            setSelectedUf(event.target.value);
                        }}
                    >
                        <MenuItem value="0">Selecione seu estado</MenuItem>
                        {ufs.map((uf) => (
                            <MenuItem key={uf.id} value={uf.sigla}>
                                {uf.nome}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        {" "}
                        Cidade{" "}
                    </InputLabel>
                    <StyledSelect
                        id="city"
                        label="Cidade"
                        {...register("cidade")}
                        value={selectedCity}
                        onChange={(event) => {
                            setSelectedCity(event.target.value);
                        }}
                    >
                        <MenuItem value="0" hidden>
                            Selecione sua cidade
                        </MenuItem>
                        {municipios.map((municipio) => (
                            <MenuItem key={municipio.id} value={municipio.nome}>
                                {municipio.nome}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>
            </div>
            <Button  type="submit" variant="contained" onClick={()=>{updateUser}}>
                Cadastrar
            </Button>
        </StyledRegisterForm>
            <BtnCloseModalUp onClick={() => setModalUpdate(false)}>X</BtnCloseModalUp>
        </DivContainer>
    );
    
}

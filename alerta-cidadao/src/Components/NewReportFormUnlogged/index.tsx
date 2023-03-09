import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { useContext} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IReport } from '../../Context/@types';
import { UserContext } from '../../Context/userContext';
import { Input } from "../Input";
import { schemaNewReportForm } from './schema';
import { StyledReportForm } from "./style";

export const NewReportForm = () => {

  const { handleSubmitNewReport, user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm<IReport>({ resolver: yupResolver(schemaNewReportForm), defaultValues:{userId:user?.id}});

  const submitNewReport: SubmitHandler<IReport> = (formData) => {
    handleSubmitNewReport(formData)
  };

  return (
    <StyledReportForm onSubmit={handleSubmit(submitNewReport)}>
      <h1> Titulo do form de reclamação </h1>
      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        label="Name"
        type="text"
        placeholder="Digite seu nome"
        register={register("name")}
      />
      <p>{errors?.description?.message} </p>
      <Input  multiline={true} rows={10} register={register("description")} placeholder="Descreva aqui seu problema" label="Descrição"/>

      <Button type='submit' variant="contained"> Enviar </Button>
    </StyledReportForm>
  );
};

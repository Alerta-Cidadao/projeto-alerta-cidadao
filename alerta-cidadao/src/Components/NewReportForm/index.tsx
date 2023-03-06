import { yupResolver } from '@hookform/resolvers/yup';
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
      <label htmlFor="description"> Descrição: <span>{errors?.description?.message} </span></label>

      <textarea  id="description" cols={30} rows={10} placeholder='Descreva aqui sua reclamação ' {...register("description")}/>

      <button type='submit'> Enviar </button>
    </StyledReportForm>
  );
};

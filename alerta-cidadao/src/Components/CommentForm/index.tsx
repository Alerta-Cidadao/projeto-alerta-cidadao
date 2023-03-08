import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form";
import { ICommentFormData, IReport } from "../../Context/@types";
import { Input } from "../Input"
import { StyledCommentForm } from "./style"
import { FaPaperPlane } from "react-icons/fa";
import { schemaComment } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { ICommentFunction } from "../../Pages/ReportPage";

interface ICommentFormProps {
  handleSubmitComment:ICommentFunction;
  idReport:number | undefined | null;
}

export const CommentForm = ({handleSubmitComment, idReport}:ICommentFormProps) => {

  const { user } = useContext(UserContext);
  
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICommentFormData>({ resolver: yupResolver(schemaComment), defaultValues:{userId:user?.id, reportId:idReport}})

    const submitComment: SubmitHandler<ICommentFormData> = (formData) => {
      handleSubmitComment(formData);
    };

  return (
    <StyledCommentForm onSubmit={handleSubmit(submitComment)}> 
      <Input
        label="body"
        placeholder="Digite aqui seu comentário"
        register={register("body")}
        error={errors.body}
        multiline={true}
        rows={3}
      />
      <Button type="submit" variant="contained"> <FaPaperPlane/> </Button>
    </StyledCommentForm>
  )
}


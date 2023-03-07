import * as yup from "yup";

export const schemaNewReportForm = yup
  .object({
    email: yup
      .string()
      .required("Preencha o campo")
      .email("Preencha com um e-mail valido"),
    description: yup.string().required("Descrição obrigatória"),
  })
  .required();

import * as yup from "yup";

export const schemaNewReportForm = yup
  .object({
    description: yup.string().required("Descrição obrigatória"),
  })
  .required();

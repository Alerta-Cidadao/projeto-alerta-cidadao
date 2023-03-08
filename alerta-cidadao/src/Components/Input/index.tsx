import TextField from "@mui/material/TextField";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInput, StyledTextField } from "./style";

interface IInputProps {
    label?: string;
    placeholder: string;
    type?: "text" | "email" | "password" | "number";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
    multiline?: boolean;
    rows?: number;
}

export function Input({
    type,
    label,
    placeholder,
    register,
    error,
    multiline,
    rows,
}: IInputProps) {
    return (
        <StyledInput>
            <StyledTextField
                type={type}
                id={register.name}
                label={placeholder}
                variant="outlined"
                {...register}
                multiline={multiline}
                rows={rows}
                color="primary"
                sx={{ borderColor: "background.default" }}
            />
            {error && <p className="helperText">{error.message}</p>}
        </StyledInput>
    );
}

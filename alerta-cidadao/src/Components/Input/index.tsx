import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";

interface IInputProps {
    label: string;
    placeholder: string;
    type: "text" | "email" | "password" | "number";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export function Input({
    type,
    label,
    placeholder,
    register,
    error,
}: IInputProps) {
    return (
        <StyledInput>
            {label && <label htmlFor={register.name}>{label}</label>}
            <input
                type={type}
                id={register.name}
                placeholder={placeholder}
                {...register}
            />
            {error && <p className="helperText">{error.message}</p>}
        </StyledInput>
    );
}

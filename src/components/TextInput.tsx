import type { UseFormRegisterReturn } from "react-hook-form";

export type TextInputProps = {
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled?: boolean;
};

export const TextInput = ({
  register,
  placeholder,
  disabled = false,
}: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...register}
      disabled={disabled}
    />
  );
};

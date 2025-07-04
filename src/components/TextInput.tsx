export type TextInputProps = {
  name: string;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
  disabled?: boolean;
};

export const TextInput = ({
  name,
  onChange,
  placeholder,
  value,
  disabled = false,
}: TextInputProps) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

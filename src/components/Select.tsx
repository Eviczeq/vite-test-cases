type Options = { value: string; label: string };
export type SelectProps = {
  options: Options[];
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean;
  value?: string;
};
export const Select = ({
  options,
  onChange,
  name,
  disabled = false,
  value,
}: SelectProps) => {
  return (
    <select
      name={name}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        選択してください
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

import Radio from "./Radio";

type Option = {
  label: string;
  value: string;
};
export type RadioGroupProps = {
  options: Option[];
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean;
};
// const options =[
//     {value:"male", label:"男性"},
//     {value:"female", label:"女性"},
//     {value:"other", label:"その他"}
// ]
export const RadioGroup = (props: RadioGroupProps) => {
  const { options, onChange, name, disabled } = props;
  return (
    <div data-testid="radio-group">
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          name={name}
          value={option.value}
          onChange={() => onChange(option.value)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

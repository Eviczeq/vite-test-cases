export type RadioProps = {
  name: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const Radio = (props: RadioProps) => {
  const { name, value, label, disabled, onChange } = props;
  return (
    <label>
      <input
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        type="radio"
      />
      {label}
    </label>
  );
};
export default Radio;

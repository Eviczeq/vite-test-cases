export type CheckboxProps = {
  label: string;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  checked: boolean;
};
const Checkbox = ({
  label,
  disabled = false,
  onChange,
  checked,
}: CheckboxProps) => {
  const id = `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        disabled={disabled}
        type="checkbox"
        onChange={(v) => onChange(v.target.checked)}
        checked={checked}
        // data-testid="hoge"
      />
    </div>
  );
};
export default Checkbox;

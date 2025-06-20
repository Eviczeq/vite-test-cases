export type CheckboxProps = {
  label: string;
  disabled?: boolean;
  id: string;
  onChange: (value: boolean) => void;
  checked: boolean;
};
const Checkbox = ({
  label,
  disabled = false,
  id,
  onChange,
  checked,
}: CheckboxProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
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

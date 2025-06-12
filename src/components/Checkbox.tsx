export type CheckboxProps = {
  label: string;
  disabled?: boolean;
  id: string;
};
const Checkbox = ({ label, disabled = false, id }: CheckboxProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} disabled={disabled} type="checkbox" />
    </div>
  );
};
export default Checkbox;

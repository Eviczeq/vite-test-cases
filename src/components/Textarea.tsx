export type TextareaProps = {
  label: string;
  disabled?: boolean;
  placeholder?: string;
};
const Textarea = ({ label, disabled = false, placeholder }: TextareaProps) => {
  return (
    <div>
      <label>{label}</label>
      <textarea disabled={disabled} placeholder={placeholder} />
    </div>
  );
};

export default Textarea;

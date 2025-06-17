export type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled: boolean;
};

const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
export default Button;

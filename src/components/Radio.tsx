export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Radio = ({ id, label, ...rest }: RadioProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} type="radio" />
    </div>
  );
};
export default Radio;

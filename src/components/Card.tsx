type Props = {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
  disabled?: boolean;
};

const ComponentName = (props: Props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.imageUrl} />
      <p>{props.description}</p>
      <button disabled={props.disabled} onClick={props.onClick}>
        Click me
      </button>
    </div>
  );
};

export default ComponentName;

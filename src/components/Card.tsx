type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const ComponentName = (props: Props) => {
  return (
    <div>
      <div>{props.title}</div>
      <img src={props.imageUrl} />
      <p>{props.description}</p>
    </div>
  );
};

export default ComponentName;

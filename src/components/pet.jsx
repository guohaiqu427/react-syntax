export default function Pet(props) {
  return (
    <div>
      <h1>{props.animal}</h1>
      <h2>{props.type}</h2>
      <p>{props.name}</p>
    </div>
  );
}

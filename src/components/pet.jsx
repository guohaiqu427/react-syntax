import React from "react";

export default function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.breed}</h2>
      <p>{props.animal}</p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Pet(props) {
  return (
    <Link to={`/details/${props.id}`}>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.breed}</h2>
        <p>{props.animal}</p>
      </div>
    </Link>
  );
}

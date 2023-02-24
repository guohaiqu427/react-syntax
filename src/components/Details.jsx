import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../fetch/fetchPet";

export default function Details() {
  const { id } = useParams();
  const result = useQuery(["pet", id], fetchPet);
  let pet = {};
  if (!result.isLoading) {
    pet = result.data.pets[0]; // rewrite here!
  }

  return <div>{pet.name}</div>;
}

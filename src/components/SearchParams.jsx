import React, { useState, useContext } from "react";
import Results from "./Results";
import useBreedList from "../customHooks/useBreedList";
import fetchPets from "../fetch/fetchPets";
import { useQuery } from "@tanstack/react-query";
const ANIMALS = ["bird", "cat", "dog", "reptile"];
import AdoptedPetContext from "./AdoptedPetContext";

export default function SearchParams() {
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [animal, setAnimal] = useState("dog");
  const BREEDS = useBreedList(animal);
  const [searchParams, setSearchParams] = useState({
    animal: "",
    breed: "",
    location: "",
  });

  const result = useQuery(["searchPets", searchParams], fetchPets);
  const pets = result?.data?.pets ?? [];

  return (
    <div className="search-param">
      SearchParams
      {adoptedPet ? (
        <div className="pet image-container">
          <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        </div>
      ) : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setSearchParams(obj);
          console.log(searchParams);
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
        />
        <label htmlFor="animal">Animal</label>
        <select
          name="animal"
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select name="breed" id="breed" disabled={BREEDS.length === 0}>
          <option />
          {BREEDS.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

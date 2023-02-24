import React, { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "../customHooks/useBreedList";

export default function SearchParams() {
  const ANIMALS = ["bird", "cat", "dog", "reptile"];
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [BREEDS] = useBreedList(animal);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json.pets);
    setPets(json.pets);
  }

  return (
    <div className="search-param">
      SearchParams
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
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
        <select
          name="breed"
          id="breed"
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        >
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

import Pet from "./Pet";
export default function Results({ pets }) {
  return pets.map((pet) => (
    <Pet
      name={pet.name}
      breed={pet.breed}
      animal={pet.animal}
      key={pet.id}
      id={pet.id}
    />
  ));
}

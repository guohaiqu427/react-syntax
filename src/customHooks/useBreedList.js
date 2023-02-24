import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList(animal);
    }
  }, [animal]);

  async function requestBreedList(animal) {
    setBreedList([]);
    setStatus("loading");

    const result = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await result.json();

    setBreedList(json.breeds);
    setStatus("loaded");
  }

  return [breedList, status];
}

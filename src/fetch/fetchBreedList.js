export default async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];
  const result = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  return result.json();
}

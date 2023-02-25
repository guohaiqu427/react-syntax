export default async function fetchPets({ queryKey }) {
  // {queryKey}
  const { animal, breed, location } = queryKey[1];
  const result = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  //   error handling
  if (!result.ok) {
    throw new Error("error");
  }
  return result.json();
}

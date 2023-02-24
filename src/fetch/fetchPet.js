export default async function fetchPet({ queryKey }) {
  const id = queryKey[1];
  const result = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  // add error handling
  return result.json();
}

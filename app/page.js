export default async function Home() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  await res.json()
  return null
}

export default async function Home() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  const pokemon = await res.json()
  console.log(pokemon)
}

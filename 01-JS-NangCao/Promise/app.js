console.log('start downloading pokemons');

const pokemonPromise = fetch('https://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200');

pokemonPromise.then((reponse) => reponse.json())
							.then(data => console.log(data))
							.catch(err => console.log(err));
console.log(pokemonPromise);

console.log('Finish downloading pokemon');


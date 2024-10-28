export const state = {
  type: "",
  pokemon: [],
  cards: [],
  deck: [],
};

export const URL = `https://pokeapi.co/api/v2/pokemon/`;

export const fetchPokemon = async function () {
  try {
    const resPokemon = await fetch(`${URL}?limit=150`);
    const dataPokemon = await resPokemon.json();

    const pokeArr = await Promise.all(
      dataPokemon.results.map(async function (pok) {
        const res = await fetch(pok.url);
        const data = await res.json();
        //   console.log(data);
        return data;
      })
    );
    return pokeArr;
  } catch (error) {}
};

export const fetchType = async function (url, type) {
  state.type = type;
  type = type.toLowerCase();
  const pokeArr = await fetchPokemon();

  const typeArr = pokeArr.filter((pok) =>
    pok.types.some((t) => t.type.name === type)
  );

  typeArr.forEach((pok) => {
    state.pokemon.push(pok);
    state.cards.push(pok);
  });
};

export const selectPokemon = function (pokemon) {
  const index = state.pokemon.findIndex((pok) => pok.name === pokemon);
  state.deck.push(state.pokemon[index]);
};

export const clearPokemon = function () {
  state.cards.splice(0, state.pokemon.length);

  console.log(state);
};

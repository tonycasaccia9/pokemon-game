export const state = {
  type: "",
  pokemon: [],
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

  console.log(pokeArr);
  console.log(typeArr);
  console.log(state);
  typeArr.forEach((pok) => {
    state.pokemon.push(pok);
  });
};

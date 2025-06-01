//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

const getRandomPokemon = async () => {
    let JSONPokemon;
    let JSONPokemonRandom;
    try {
        const totalPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    console.log(totalPokemon);
    if (totalPokemon.ok){
        JSONPokemon = await totalPokemon.json();
    } else throw 'Error al recibir fetch';
    const count = JSONPokemon.count;
    console.log("Cantidad: ", count);

    const idPokemon = Math.floor(Math.random() * count);
    console.log("Id pokemon: ",idPokemon);

    const pokemonRandom = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    if (pokemonRandom.ok){
        JSONPokemonRandom = await pokemonRandom.json();
        console.log("Pokemon random recibido: ",JSONPokemonRandom)
    } else throw 'Error al recibir fetch';
    console.log(JSONPokemonRandom.name);
    return JSONPokemonRandom;

    } catch (error) {
        console.log(error);
    }
    
}

const printImageAndName = async (datos) => {

    const imagen = document.querySelector("#imagen");
    console.log(imagen);
    const nombre = document.querySelector("#nombrePokemon");
    let poke = await datos;
    console.log("nombrePoke: ", poke.name)
    console.log("imgPoke: ", poke.img);
    imagen.src = poke.img;
    nombre.innerHTML = poke.name;

}

const pokemon = getRandomPokemon();
let datos = getImageAndName(pokemon);
printImageAndName(datos);

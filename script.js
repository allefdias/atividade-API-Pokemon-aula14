async function searchPokemon() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        document.getElementById('pokemon-info').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayPokemon(data) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = `
        <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>Tipo:</strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        <p><strong>Altura:</strong> ${data.height / 10} m</p>
        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
    `;
}

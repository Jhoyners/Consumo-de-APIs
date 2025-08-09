document.getElementById('searchBtn').addEventListener('click', function() {
    let pokemonName = document.getElementById('pokemonInput').value.trim().toLowerCase();

    if (pokemonName === "") {
        document.getElementById('card').innerHTML = "<p>Por favor escribe un nombre de Pokémon.</p>";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Pokémon no encontrado");
            }
            return response.json();
        })
        .then(function(data) {
            let abilities = data.abilities.map(function(abi) {
                return abi.ability.name;
            }).join(", ");

            let types = data.types.map(function(t) {
                return t.type.name;
            }).join(", ");

            document.getElementById('card').innerHTML = `
                <div class="card">
                    <h2>${data.name.toUpperCase()}</h2>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <p><strong>Habilidades:</strong> ${abilities}</p>
                    <p><strong>Tipos:</strong> ${types}</p>
                </div>
            `;
        })
        .catch(function(error) {
            document.getElementById('card').innerHTML = `<p>${error.message}</p>`;
        });
});

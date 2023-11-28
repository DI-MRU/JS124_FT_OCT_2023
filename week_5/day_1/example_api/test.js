const pokeName = document.querySelector(".display_pokemon_name");

const getPokemon = async (names) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${names}`);
    const data = await response.json();
    const name = data.name;
    const type = data.types[0].type.name;

    // Create HTML elements for name and type
    const nameElement = document.createElement("p");
    nameElement.textContent = "Name: " + name;

    const typeElement = document.createElement("p");
    typeElement.textContent = "Type: " + type;

    // Append the elements to the pokeName container
    pokeName.appendChild(nameElement);
    pokeName.appendChild(typeElement);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};

getPokemon("pikachu");

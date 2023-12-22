document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const pokemonDiv = document.querySelector(".pokemon");
      data.forEach((pokemon) => {
        const pokemonName = document.createElement("h3");
        pokemonName.innerText = `Pokemon:${pokemon.title}`;
        pokemonDiv.appendChild(pokemonName);
      });
    } else {
      console.error(
        "Invalid response format: 'data' is not an array or is empty"
      );
    }
  } catch (error) {
    console.error(error.message);
  }
});

const submitForm = document.querySelector(".submit-form");

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.querySelector("input[name='pokemon']").value;
  try {
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) throw new Error("Invalid response");
    else {
      await response.json();
      console.log("Pokemon added successfully");
      //   refresh the page
      location.reload();
    }
  } catch (error) {
    console.error(error.message);
  }
});

let pokemonData = [];

// Fetch data from mock server
async function fetchPokemon() {
  try {
    const response = await fetch("http://localhost:3000/pokemon");
    if (!response.ok) {
      throw new Error("http call failed");
    }
    const data = await response.json();
    pokemonData = data;
    renderApp();
  } catch (error) {
    console.error("Failed to fetch Pokemon data:", error);
    renderApp();
  }
}

function PokemonCard(props) {
  return React.createElement(
    "div",
    {
      className:
        "card w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
    },

    React.createElement(
      "a",
      { href: "#" },
      React.createElement(
        "div",
        { className: "flex justify-center" },
        React.createElement("img", {
          className: "rounded-t-lg h-60 w-auto",
          src: props.image,
          alt: props.name,
        })
      )
    ),
    React.createElement(
      "div",
      { className: "px-5 pb-5" },
      React.createElement(
        "h2",
        {
          className:
            "pokemon-name mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center capitalize",
        },
        props.name
      ),
      React.createElement(
        "div",
        {
          className: "grid grid-cols-3 grid-rows-2 items-center gap-1",
        },
        React.createElement(
          "p",
          {
            className:
              "align-middle font-normal text-gray-700 dark:text-gray-400",
          },
          `Type:`
        ),
        React.createElement(
          "p",
          {
            className: `font-normal text-center text-gray-800 dark:text-gray-300 bg-pink-700 hover:bg-cyan-600 rounded-lg capitalize w-auto inline-block p-1 ${
              props.types2 ? "" : "col-span-2"
            }`,
          },
          `${props.types1}`
        ),
        props.types2 &&
          React.createElement(
            "p",
            {
              className:
                "font-normal text-center text-gray-800 dark:text-gray-300 bg-yellow-700 hover:bg-cyan-600 rounded-lg capitalize w-auto inline-block p-1",
            },
            `${props.types2}`
          ),
        React.createElement(
          "p",
          {
            className:
              "align-middle font-normal text-gray-700 dark:text-gray-400",
          },
          `Abilities:`
        ),
        React.createElement(
          "p",
          {
            className:
              "col-span-2 font-normal text-gray-700 dark:text-gray-400 capitalize p-1",
          },
          `${props.abilities}`
        )
      )
    )
  );
}

// List component
function PokemonList() {
  if (pokemonData.length === 0) {
    return React.createElement(
      "p",
      { className: "text-center" },
      "Loading Pokemon data..."
    );
  }

  return React.createElement(
    "div",
    { className: "pokemon-list flex flex-wrap gap-2 p-8 justify-center" },
    pokemonData.map((pokemon) =>
      React.createElement(PokemonCard, {
        key: pokemon.id,
        name: pokemon.name,
        types1: pokemon.types[0],
        types2: pokemon.types[1],
        abilities: pokemon.abilities.join(" / "),
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
      })
    )
  );
}

// App component wrap header and list
function App() {
  return React.createElement(
    "div",
    { className: "" },
    React.createElement(
      "header",
      { className: "" },
      React.createElement(
        "h1",
        {
          className: "text-3xl font-bold dark:text-gray-700 text-center mt-10",
        },
        "Pokedex List"
      )
    ),
    React.createElement(PokemonList, null)
  );
}

// Function to render the app
function renderApp() {
  ReactDOM.render(React.createElement(App), document.getElementById("root"));

  const searchInput = document.getElementById("search-navbar");
  const header = document.getElementById("header");
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const pokemonCards = document.querySelectorAll(".card");

    pokemonCards.forEach((card) => {
      const pokemonName = card
        .querySelector(".pokemon-name")
        .textContent.toLowerCase();

      if (pokemonName.includes(searchTerm) && searchTerm !== "") {
        card.style.display = "block";
        header.style.display = "block";
      }

      if (pokemonName.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
        header.style.display = "none";
      }
    });
  });
}

// Initial render
renderApp();

// Fetch and display the Pokemon data
fetchPokemon();

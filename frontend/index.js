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
        "w-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
    },
    React.createElement(
      "a",
      { href: "#" },
      React.createElement(
        "div",
        { className: "flex justify-center" },
        React.createElement("img", {
          className: "rounded-t-lg h-full",
          src: props.image,
          alt: props.name,
        })
      )
    ),
    React.createElement(
      "div",
      { className: "p-5" },
      React.createElement(
        "h2",
        {
          className:
            "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
        },
        props.name
      ),
      React.createElement(
        "p",
        { className: "mb-3 font-normal text-gray-700 dark:text-gray-400" },
        `Type: ${props.types}`
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
    { className: "flex flex-wrap gap-2 p-8 justify-center" },
    pokemonData.map((pokemon) =>
      React.createElement(PokemonCard, {
        key: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.join("/"),
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
}

// Initial render
renderApp();

// Fetch and display the Pokemon data
fetchPokemon();

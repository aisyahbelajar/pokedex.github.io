# Pokedex Project

This is a Pokedex web application that allows users to view Pokémon data retrieved from a mock server and displayed using React.

## Getting Started

Follow these instructions to set up the project and start using the Pokedex.

### Prerequisites

- Node.js installed on your machine
- Live Server extension in your IDE (e.g., VSCode)

### Setup Instructions

1. **Install dependencies**  
   Navigate to the `backend` folder and install the necessary dependencies:
   ```bash
   npm install
   ```
2. **Generate the Pokémon database**  
   To fetch the Pokémon data from the API and store it into the `db.json` file, run:
   ```bash
   npm run generate:db
   ```
3. **Start the backend server**  
   Once the Pokémon data has been generated, you can start the mock API server by running:
   ```bash
   npm run start
   ```
4. **Open the frontend**  
   After the backend server is running, navigate to the `frontend` folder, and open the `index.html` file using Live Server.

# Features

- Search functionality: Filter Pokémon by name using the search bar.
- Responsive design: The layout adjusts based on the screen size for optimal viewing.

## Project Structure

- `backend/`: Contains the server and API logic.
- `frontend/`: Contains the frontend HTML, CSS, and JavaScript.

### Troubleshooting

- Ensure that the backend server is running before opening the frontend.
- If Pokémon data is not appearing, check that the `db.json` file has been correctly populated by running npm run `generate:db`.

This will provide clear instructions to users on how to set up and run the Pokedex project.

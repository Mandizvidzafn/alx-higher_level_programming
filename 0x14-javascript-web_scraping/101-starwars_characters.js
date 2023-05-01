#!/usr/bin/node
const fetch = require('node-fetch');

// Get the movie ID from the command-line argument
if (process.argv.length < 3) {
  console.log('Usage: node script.js <movie_id>');
  process.exit(1);
}
const movieId = process.argv[2];

// Send a GET request to the Star Wars API
const url = `https://swapi.dev/api/films/${movieId}/`;
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Get the character URLs from the response and send a GET request for each character
    const characterUrls = data.characters;
    return Promise.all(characterUrls.map(url => fetch(url)));
  })
  .then(responses => {
    // Print the character names from the responses
    for (const response of responses) {
      if (response.ok) {
        response.json().then(data => console.log(data.name));
      }
    }
  })
  .catch(error => {
    console.error(error);
  });

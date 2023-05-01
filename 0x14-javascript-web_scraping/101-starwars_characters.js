#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command-line argument
if (process.argv.length < 3) {
  console.log('Usage: node script.js <movie_id>');
  process.exit(1);
}
const movieId = process.argv[2];

// Send a GET request to the Star Wars API
const url = `https://swapi.dev/api/films/${movieId}/`;
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP error! status: ${response.statusCode}`);
  } else {
    const data = JSON.parse(body);
    // Get the character URLs from the response and send a GET request for each character
    const characterUrls = data.characters;
    characterUrls.forEach(characterUrl => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error(`Error: ${error}`);
        } else if (response.statusCode !== 200) {
          console.error(`HTTP error! status: ${response.statusCode}`);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});

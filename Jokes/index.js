const url = 'https://api.chucknorris.io/jokes/random';

// Function to fetch a random joke from the API and display it
function fetchJoke() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('display-joke').innerText = data.value;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      document.getElementById('display-joke').innerText = 'Failed to fetch joke. Please try again later.';
    });
}

document.getElementById('getJoke').addEventListener('click', fetchJoke);

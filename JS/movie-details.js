const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM5NTdiZGNmY2QzYmY1ZThlMmZjNzY0ZGQ2OGQzNSIsIm5iZiI6MTcyOTYyOTI4MS4yNTA0NzcsInN1YiI6IjY3MTZiOGZhNWFjOTZiODhhMDM1ZWIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eMEDCI7FAhpRZlMer1zuj8Qz1Akoje4YmZawaBGNZdY' // Replace with actual API key
    }
};

// Function to get the movie ID from the URL
function getMovieIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Fetch and display movie details
async function fetchMovieDetails() {
    const movieId = getMovieIdFromUrl();
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    const movie = await response.json();

    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Overview:</strong> ${movie.overview}</p>
        <p><strong>Rating:</strong> ${movie.vote_average}</p>
    `;
}

// Call function to load movie details on page load
fetchMovieDetails();

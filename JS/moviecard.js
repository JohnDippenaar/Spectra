document.addEventListener("DOMContentLoaded", () => {
    const movieTitle = "Inception";  // Replace with dynamic input
    const apiKey = "YOUR_API_KEY";  // Replace with your actual API key
    const apiUrl = `https://api.movieofthenight.com/availability?title=${movieTitle}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("movie-title").innerText = data.title;
            document.getElementById("movie-poster").src = data.poster;
            document.getElementById("availability").innerText = `Available on: ${data.platforms.join(", ")}`;
        })
        .catch(error => console.error("Error fetching data:", error));
});

// Check login status on page load
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      // Redirect to sign-in page if not logged in
      window.location.href = 'signin.html';
    }
});

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM5NTdiZGNmY2QzYmY1ZThlMmZjNzY0ZGQ2OGQzNSIsIm5iZiI6MTcyOTYyOTI4MS4yNTA0NzcsInN1YiI6IjY3MTZiOGZhNWFjOTZiODhhMDM1ZWIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eMEDCI7FAhpRZlMer1zuj8Qz1Akoje4YmZawaBGNZdY'
    }
};

let currentIndex = 0;

async function GetAPIInfo(){
    const carouselInner = document.querySelector('#new-movies .carousel-inner'); // Get the carousel inner container

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(res => res.json())
    .then(res => {
        const movies = res.results.slice(0, 5); // Take only the first 5 movies

        movies.forEach((movie, index) => {
            // Create a carousel item
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active'); // Set the first item as active

            // Create a container for movie content
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            // Movie poster image
            const moviePoster = document.createElement('img');
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`; // Use backdrop path
            moviePoster.alt = `${movie.title} poster`;
            moviePoster.classList.add('d-block', 'w-100');
            movieCard.appendChild(moviePoster);

            // Movie title
            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.title;
            movieTitle.style.color = 'white'; // Set the title color to white
            movieCard.appendChild(movieTitle);

            // Movie release date
            const movieReleaseDate = document.createElement('p');
            movieReleaseDate.textContent = `Release Date: ${movie.release_date}`;
            movieCard.appendChild(movieReleaseDate);

            // Append the movie card to the carousel item
            carouselItem.appendChild(movieCard);
            carouselInner.appendChild(carouselItem);
        });

        // Show the first slide once the movies are loaded
        showSlide(currentIndex);
    })
    .catch(err => console.error(err));
}

GetAPIInfo();


async function GetPopularAPIInfo(){
    const carouselInner = document.querySelector('#popular-series .carousel-inner'); // Get the carousel inner container

    fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(res => res.json())
    .then(res => {
        const movies = res.results.slice(0, 5); // Take only the first 5 movies

        movies.forEach((movie, index) => {
            // Create a carousel item
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active'); // Set the first item as active

            // Create a container for movie content
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            // Movie poster image
            const moviePoster = document.createElement('img');
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`; // Use backdrop path
            moviePoster.alt = `${movie.title} poster`;
            moviePoster.classList.add('d-block', 'w-100');
            movieCard.appendChild(moviePoster);

            // Movie title
            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.title;
            movieCard.appendChild(movieTitle);

            // Movie release date
            const movieReleaseDate = document.createElement('p');
            movieReleaseDate.textContent = `Release Date: ${movie.release_date}`;
            movieCard.appendChild(movieReleaseDate);

            // Append the movie card to the carousel item
            carouselItem.appendChild(movieCard);
            carouselInner.appendChild(carouselItem);
        });

        // Show the first slide once the movies are loaded
        showSlide(currentIndex);
    })
    .catch(err => console.error(err));
}

// GetPopularAPIInfo();





function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (totalSlides === 0) return; // Ensure there are slides to display

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    // Show the current slide
    slides[currentIndex].classList.add('active');
}

// Optional: You could use this if you want to handle clicks manually
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

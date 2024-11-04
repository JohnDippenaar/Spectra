document.addEventListener('DOMContentLoaded', () => {

    const API_KEY = "f5c957bdcfcd3bf5e8e2fc764dd68d35";

    const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM5NTdiZGNmY2QzYmY1ZThlMmZjNzY0ZGQ2OGQzNSIsIm5iZiI6MTcyOTYyNzk2Mi42NDU5MTEsInN1YiI6IjY3MTZiOGZhNWFjOTZiODhhMDM1ZWIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LDf2-pWJDgieKFDSc_qIsqqGirdUyFucGxDiGIbllsg";

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM5NTdiZGNmY2QzYmY1ZThlMmZjNzY0ZGQ2OGQzNSIsIm5iZiI6MTczMDY0ODA1Mi45NzA0MDIsInN1YiI6IjY3MTZiOGZhNWFjOTZiODhhMDM1ZWIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wKt1mIDG8enih7ZcV-H8019JLAVwnimwsCtIKUtbFVM'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
      .then(res => res.json())
      .then(res => {
        const movies = res.results; // Accessing the array of movies
        const moviesList = document.getElementById('series-list'); // Get the container element
    
        movies.forEach(movie => {
          // Create the movie card element
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
    
          // Movie poster image
          const moviePoster = document.createElement('img');
          moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          moviePoster.alt = `${movie.title} poster`;
          movieCard.appendChild(moviePoster);
    
          // Movie title
          const movieTitle = document.createElement('h3');
          movieTitle.textContent = movie.title;
          movieCard.appendChild(movieTitle);
    
          // Movie release date
          const movieReleaseDate = document.createElement('p');
          movieReleaseDate.textContent = `Release Date: ${movie.release_date}`;
          movieCard.appendChild(movieReleaseDate);
    
          // Append the movie card to the movies list
          moviesList.appendChild(movieCard);
        });
      })
      .catch(err => console.error(err));
    


  });

  $(document).ready(function() {
    // Show or hide the button when scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Smooth scroll to top when button is clicked
    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 50);
        return false;
    });
});

$(document).ready(function() {
  $('#search-button').click(function(event) {
      event.preventDefault(); // Prevents form submission if inside a form

      // Get the search input value
      const query = $('#search').val().trim();

      if (query) {
          // Perform the search action (redirect to search results page with query)
          window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
      } else {
          alert('Please enter a search term.');
      }
  });
});
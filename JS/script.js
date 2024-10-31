let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

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

window.onload = function () {
    showSlide(currentIndex);
};


// When Importing the images for the carousel use the backdrop path



const API_KEY = "f5c957bdcfcd3bf5e8e2fc764dd68d35";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM5NTdiZGNmY2QzYmY1ZThlMmZjNzY0ZGQ2OGQzNSIsIm5iZiI6MTcyOTYyNzk2Mi42NDU5MTEsInN1YiI6IjY3MTZiOGZhNWFjOTZiODhhMDM1ZWIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LDf2-pWJDgieKFDSc_qIsqqGirdUyFucGxDiGIbllsg";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWM5NTdiZGNmY2QzYmY1ZThlMmZjNzY0ZGQ2OGQzNSIsIm5iZiI6MTcyOTYyOTI4MS4yNTA0NzcsInN1YiI6IjY3MTZiOGZhNWFjOTZiODhhMDM1ZWIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eMEDCI7FAhpRZlMer1zuj8Qz1Akoje4YmZawaBGNZdY'
    }
  };

  let data;

  function splitClasses(){

  
  }

  class Movie {
    constructor(title, overview, img, releaseDate, rating){
        this.title = title;
        this.overview = overview;
        this.img = img;
        this.releaseDate = releaseDate;
        this.rating = rating;
    }


}

const newList = document.querySelector("new-list");  
  async function GetAPIInfo(){
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(res => res.json())
    .then(res => {
        data = res;
        
        
            let  movie = new Movie(data.results[0].title, data.results[0].overview, data.results[0].poster_path, data.results[0].release_date, data.results[0].vote_average);

            let div = document.createElement("div");
            div.classList.add("carousel-item");
            div.classList.add("d-block");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.backgroundImage = `url('${movie.img}')`;
            div.style.color = "white";

            newList.appendChild(div);

            /*
                <div class="carousel-item active">
                    <img src="assets/HendrikOdendaal_221140_LidestyleShoot1.jpg" class="d-block w-100" alt="Image 1" width="50%">
                </div>
            */
        })
        .catch(err => console.error(err));
  }
  
 GetAPIInfo();


// The `movies` array from the file `src/data.js`.

const movies = require("./data");

console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {}
const allDir = movies.map(direct => direct.director)
console.log(allDir)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movie) {
  const result = movie.filter((movie) => movie.director === "Steven Spielberg")
  return result.length
}
howManyMovies(movies)
const direct = movies
console.log(direct.length)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movie) {
  const movieScore = movie
  .map(moviesSum => moviesSum.score)
  .reduce(((acc, cur) => acc + cur))
  return Number(movieScore.toFixed(2))
}
const resultado = scoresAverage(movies)
console.log(resultado)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(list) {
  const dramaMovieArray = []
  list.map((movie) => {
    if (movie.genre.includes ('Drama'))
      {
        dramaMovieArray.push(movie.score)
      }
  })
console.log(dramaMovieArray.reduce((acc, vlr) => acc+vlr)/list.length)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
  const sortYear = movie.year
  .sort((a, b) => a - b);
  return sortYear
}
const resultado3 = orderByYear(movies)
console.log(resultado3)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie) {
  const sortTitle = movie.title
  .sort(function(a, b){
    var nameA = a.name.toUpperCase() // ignore upper and lowercase
    var nameB = b.name.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
      return -1; //nameA comes first
      }
      if (nameA > nameB) {
      return 1; // nameB comes first
      }
  return 0;  // names must be equal
  });
  console.log(sortTitle)  
}
const resultado4 = orderAlphabetically(movies)
console.log(resultado4)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(list) {
  const hoursMovie = []
  list.map((duration) => {
    return duration.floor(hours * 60);
  }
    hoursMovie.push(movie.duration)
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

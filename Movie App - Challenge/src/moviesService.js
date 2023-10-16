// Import the axios library
const axios = require('axios')
const moviesList = require('../data/movies').movies
const getMovies = (done) => {
  return JSON.stringify(moviesList);
}

const getMoviesById = (movieId, done) => {
  let movie = null
  moviesList.filter(m => {
    if (m.id == movieId) {
      movie = m
    }
  })
  if (movie === null) {
    //return error
    return done("Requested movie doesn't exist..!")
  }
  return done(null, JSON.stringify(movie));
}

// getMoviesById(1,(err,res)=>{
//   console.log(res);
// })

const saveMovie = function (newMovie, done) {
  let found = null
  moviesList.filter(element => {
    if (element.id === newMovie.id) {
      found = element.id
    }
  })
  if (found) {
    return done("Movie already exists..!")
  }
  moviesList.push(newMovie)
  return done(null, JSON.stringify(moviesList));
}

// saveMovie({id:1},(err,res)=>{
//   console.log(err);
// })

const updateMovie = function (movieId, updateData, done) {
  let updatedMoviesList = null;
  let found = null;
  updatedMoviesList = moviesList.map(element => {
    if (element.id === movieId) {
      found = element;
      return {
        "id": movieId,
        "movieName": updateData.movieName,
        "director": updateData.director,
        "rating": updateData.rating
      }

    }
    else {
      return element
    }
  });
  if (!found) {
    return done('Requested movie doesn\'t exist..!')
  }
  return done(null, JSON.stringify(updatedMoviesList));
}

// updateMovie(10, {}, (err, rest)=>{
//   console.log(err);
// })


const deleteMovieById = function (movieId, done) {
  const movie = moviesList.find(m => m.id === movieId)
  if (!movie) {
    return done('Requested movie doesn\'t exist..!')
  }
  const index = moviesList.indexOf(movie)
  moviesList.splice(index, 1)
  return done(null, JSON.stringify(moviesList));
}

deleteMovieById(5,(err,res)=>{
  console.log(err);
  console.log(res);
})


module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}

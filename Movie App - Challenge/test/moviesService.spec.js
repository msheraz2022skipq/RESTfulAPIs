const sinon = require("sinon");
const moviesService = require("../src/moviesService");

describe("Test movie service", () => {
  it("should save movie and return that object", (done) => {
    let movie = {
      id: 2,
      movieName: "Shawshank Redemption",
      director: "Franklin",
      rating: "9.9",
    };
    var create = sinon.stub(moviesService, "saveMovie");
    moviesService.saveMovie(movie, (err, results) => {});
    sinon.assert.calledOnceWithMatch(create, movie);
    done();
    create.restore();
  });

  it("should return all movies", (done) => {
    var getAll = sinon.stub(moviesService, "getMovies");
    moviesService.getMovies((err, results) => {});
    sinon.assert.calledOnce(getAll);
    done();
    getAll.restore();
  });
  it("should return movie given the movie id", (done) => {
    var findById = sinon.stub(moviesService, "getMoviesById");
    moviesService.getMoviesById((err, results) => {});
    sinon.assert.calledOnce(findById);
    done();
    findById.restore();
  });
  it("should update movie given the movie id", (done) => {
    var updateById = sinon.stub(moviesService, "updateMovie");
    let updatedMovie = {
      id: 7,
      movieName: "Shawshank Redemption",
      director: "Franklin",
      rating: "9.9",
    };
    moviesService.updateMovie(
      updatedMovie.id,
      updatedMovie,
      (err, results) => {}
    );
    sinon.assert.calledOnceWithMatch(updateById, updatedMovie.id, updatedMovie);
    done();
    updateById.restore();
  });
  it("should delete movie given the movie id", (done) => {
    const id = 1;
    var remove = sinon.stub(moviesService, "deleteMovieById");
    moviesService.deleteMovieById(id, (err, results) => {});
    sinon.assert.calledOnceWithMatch(remove, id);
    done();
    remove.restore();
  });
});

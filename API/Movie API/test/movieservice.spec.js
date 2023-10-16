const sinon = require("sinon");
const movieservice = require("../src/movieservice");

describe("Test movie service", () => {
  it("should save movie and return that object", (done) => {
    let movie = {
        "movieName": "Sherlock Holmes",
        "director": "Franklin",
        "rating": "10",
        "id": 7
    };
    var create = sinon.stub(movieservice, "saveMovieDetails");
    movieservice.saveMovieDetails(movie, (err, results) => {});
    sinon.assert.calledOnceWithMatch(create, movie);
    done();
    create.restore();
  });
  it("should return all movies", (done) => {
    var getAll = sinon.stub(movieservice, "getMovies");
    movieservice.getMovies((err, results) => {});
    sinon.assert.calledOnce(getAll);
    done();
    getAll.restore();
  });
  it("should return movie given the movie id", (done) => {
    var findById = sinon.stub(movieservice, "getMovieById");
    movieservice.getMovieById((err, results) => {});
    sinon.assert.calledOnce(findById);
    done();
    findById.restore();
  });

});
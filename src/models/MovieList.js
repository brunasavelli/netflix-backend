class MovieList {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    
    getAllMovies() {
        return this.movies;
    }
}
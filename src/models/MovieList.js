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

    getMovieById(id) {
        const movie = this.movies.find(movie => movie.id == id);
        if(!movie) {
            throw new Error("Filme não encontrado");
        }
        return movie;
    }
}
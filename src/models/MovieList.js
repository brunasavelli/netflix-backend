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

    //Método de update
    updateMovie(id, updateData) {
        const movie = this.getMovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }

    getTotalMovies() {
        return this.movies.length;
    }
}

module.exports = MovieList;
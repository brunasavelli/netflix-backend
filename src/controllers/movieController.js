const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const filme1 = new Movie('Diário de uma Paixão', 'Nick Cassavetes', '2004', 'Romance', 10, false);
lista.addMovie(filme1);

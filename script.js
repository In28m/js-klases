// Objektas
function Movie(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
}

// Prototipas
Movie.prototype.getIntroduction = function() {
    return this.name + ' (' + this.year + ') - Directed by: ' + this.director;
};

Movie.prototype.getProfit = function() {
    return this.income - this.budget;
};

// Objekto kurimas
var movie = new Movie('Spider - Man', 2007, 'Sam Raimi', 1000000, 5000000);

// Rezultataas
console.log(movie.getIntroduction()); // Turi grąžinti filmo pavadinimą
console.log(movie.getProfit()); // Filmo pelną

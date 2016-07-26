var favMovies = []

function Movies(title, director, genres, year, actors){
  this.title = title
  this.director = director
  this.genres = genres
  this.year = year
  this.actors = actors
}

favMovies.push(new Movies("Galaxy Quest", "Dean Parisot", ["Adventures", "Comedy", "Sci-Fi"], "1999", ["Tim Allen", "Sigourney Weaver", "Alan Rickman", "Tony Shalhoub", "Sam Rockwell"]))
favMovies.push(new Movies("The Matrix", "The Wachowski Brothers", ["Action", "Sci-Fi"], "1999", ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Gloria Foster"]))
favMovies.push(new Movies("The Others", "Alejandro Amenabar", ["Fantasy", "Horror", "Thriller"], "2001", ["Nicole Kidman", "Fionnula Flanagan","Christopher Eccleston", "Alakina Mann"]))
favMovies.push(new Movies ("Fifty Shades of Grey", "Sam Taylor-Johnson", ["Drama", "Romance"], "2015", ["Dakota Johnson", "Jamie Dornan", "Jennifer Ehle", "Eloise Mumford"]))
favMovies.push(new Movies ("Pulp Fiction", "Quentin Tarantino", ["Crime", "Drama"], "1994", ["Samuel Jackson", "John Travolta", "Uma Thurman", "Bruce Willis"]))

favMovies.sort(function (a, b){return (a.title > b.title)})
console.log(favMovies)
json = JSON.stringify(favMovies)
console.log(json)

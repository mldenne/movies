JavaScript Objects & Arrays Assignment
======================================
The object of this assignment is to build a list of the student's top 5 favorite movies, with details about the film, including a list of directors and actors.

Instructions
------------

Assignment Objectives

By the end of this assignment, you'll be able to:

* Understand How To Create An Array
* Understand How To Create An Object
* Understand How To Add Values To Arrays
* Understand How To Use Nested Data Within Objects
* Understand How To Sort Arrays
* Understand How To Convert To JSON

Deliverables
------------
### Explorer Mode

Create an index.html file that pulls in a file called main.js. Within main.js, write your script to complete the assignment. Make sure that you console.log the final output.

To complete this assignment correctly, you must do all of the following:

* Create an empty array
  `var favMovies = []`

* Dynamically add 5 favorite movies to the array, one by one (rather than at creation time)
* Make sure each movie object has a title, director list, genre, year, and actor list

```function Movies(title, director, genres, year, actors){
  this.title = title
  this.director = director
  this.genres = genres
  this.year = year
  this.actors = actors
}
```

  `favMovies.push(new Movies(...))`

* After adding each movie, sort the array by title
  `favMovies.sort(function (a, b){return (a.title > b.title)})`

* Convert and output the entire list as JSON
  `json = JSON.stringify(favMovies)`


### Adventure Mode

Output the results to HTML instead/in addition. Create a table of your movies with the information for each, for instance. Use Bootstrap for styling.
Add a ratings property to each movie that has both IMDB's star rating and IMDB's Metascore rating
Sort the movies by their star rating
Make another list of the worst films ever, in your opinion, and combine them with your favorites
Epic Mode

Grab some example JSON API movie data from http://www.omdbapi.com/ and parse it
Experiment with getting your favorite movies pulled back via an AJAX API request
Experiment with another API's data (see: https://github.com/toddmotto/public-apis)
Don't forget! After completing the assignment, you must submit the assignment to receive credit.

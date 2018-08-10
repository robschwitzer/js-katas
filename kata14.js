function randomMovies(movies){
  let index = Math.floor(Math.random() * movies.length);
  return movies[index]
}

console.log(randomMovies(["Rocky", "Rocky II", "Rocky III", "Rocky IV"]))
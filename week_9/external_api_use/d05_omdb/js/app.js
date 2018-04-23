$(function() {

  function getMovieData(title) {
    const result = $.ajax({
    // url: 'http://www.omdbapi.com/?i=tt3896198&apikey=b0cb780d'
      url: 'http://www.omdbapi.com/'
      data: {
        s: 'Batman',
        apikey: 'b0cb780d'
      }
    });

    return result;
  }

  getMovieData('Batman')
    .then(function(data) {
      const movieData = data.Search;

      const normalizedMovies = movieData.map(function(movie) {
        const { Poster: poster, Title: title, imdbID } = movie;

        return{
          poster,
          title,
          imdbID
        }
      })

      return normalizedMovies;
    })
    .then(function(moviesToRender) {
      moviesToRender.forEach(function(movie){
      const {poster, title, imdbID } = moviesToRender;
      const template =
        <div data-id = "">
          <h1>${title}</h1>
          <img src="${poster}" alt="${title}">
        </div>
    })
    })
  //
  // const result = $.ajax({
  //   url: 'http://www.omdbapi.com/?i=tt3896198&apikey=b0cb780d&t= '
  // });
  // document.getElementById('search-input').innerHtml
  //
  // result.then(function(response) {
  //   renderResults([response.data])

  result.then(function(data) {
    console.log(data);
  })
})

$(function() {
	gifTemplate = Handlebars.compile($('#gif-template').html());

	$('#search-box').on('click', '#search', search);
	$('#search-box').on('keypress', function(event) {
		if (event.keyCode === 13) { search(); }
	});

	$('#search-box').on('click', '#random', getRandomGif);
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#puppies', puppyBomb);


// Performs an AJAX request to the giphy api
// endpoint: http://api.giphy.com/v1/gifs/random
// api_key: dc6zaTOxFJmzC&
// Request will return an object with a single gif and metadata
function getRandomGif() {
	const result = $.ajax({
		url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
		});

		result.then(function(response) {
			renderResults([response.data]);
		});
};

// Kitten Bomb
// AND
// Puppy Bomb
// Performs an AJAX request to the giphy api
// should ask for 10 gifs
// should render and display them using the gifTemplate
function kittenBomb() {
	const result = $.ajax({
		url: 'http://api.giphy.com/v1/gifs/search/cat-bomb?api_key=dc6zaTOxFJmzC/10'
		});

		result.then(function(response) {
			renderResults([response.data]);
		})
};
function puppyBomb() {
	const result = $.ajax({
		url: 'http://api.giphy.com/v1/gifs/search/puppy-bomb?api_key=dc6zaTOxFJmzC/10'
		});

		result.then(function(response) {
			renderResults([response.data]);
		})
};

// Performs an AJAX request to the giphy api
// with user supplied search params
function search() {
	
};

// Should render and display the results
// returned from the AJAX request to giphy
function renderResults(results) {

};

$(function(){
	const vanillaAside = document.getElementById('awesome');
	console.log(vanillaAside);
	//grab element by id with vanillia js

	const $aside = $('#awesome');
	console.log($aside);
	//grab element by id with jquery


	const vanillaYay = document.getElementsByClassName('yay');
	console.log(vanillaYay);
	//grab element by class with vanillia js

	const $yay = $('.yay');
	console.log($yay);
	//grab element by class with vanillia js



	const newLi = document.createElement('li');
	newLi.classList.add('whatever');
	//make new element with vanillia js

	const $newLi = $('<li class="whatever">');
	//make new element with jquery

	const $header = $('.container h1');
	console.log($header.html());
	$header.text('text here');
	//change element

	const $googleLink = $('.google');
	$googleLink.text('GO TO GOOGLE')
	//set the text of google link to something else

	const $linkHolder = $('.link-holder')
	$linkHolder.html($googleLink);
	//set the html of link holder to be the google link

	const $h1 = $('<h1>blah</h1>');
	//makes new element <brackets> are creaters
	$('body').append($h1);
	//$h1.appendTo()'body');
	$('body').prepend($h1)
	//$h1.prependTo()'body');
	$h1.remove();
	//remove element
	$('.second').empty();
	//empties whatever is inside the element

	const $uList = $('.second');
	$linkHolder.append('$uList');
	// TAKE THE UL WITH THE CLASS OF SECOND AND APPEND IT TO THE LINK HOLDER DIV

	$('.container').prepend('$linkholder');
	// PREPEND THE LINK HOLDER DIV TO THE CONTAINER DIV

	const $asideSection = $('.asides');
	const $allAsides = $('aside');
	$asideSection.html('$allAsides');
	// EMPTY THE SECTION WITH THE CLASS OF ASIDES AND APPEND ALL ASIDES THAT EXIST IN THE PAGE TO IT

	const $circle = $('.circle');
	$circle.css('background-color', 'blue');
	//CHANGE COLOR OF THE CIRCLE

	$circle.addClass('newClass');
	//ADD CLASS NAME
	$circle.removeClass('newClass');

	// $circle.parent();
	$circle.children()
	console.log($circle.children());

	$('new-card-button').on('click', function(){
   console.log('text');
  })
	//event handlers
  $('.card').on('click', '.delete', function(){
     console.log('text');
  })



});

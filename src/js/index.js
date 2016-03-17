// Javascript Entry Point
import $ from 'jquery';

import specials from './specials';


///////////////menu created below

var $menu = $('#menu-content');

var url = "https://json-data.herokuapp.com/restaurant/menu/3";

$.ajax(url).then(function(object){

	var beerTitles = object.Beer.map(function({item, price, description}){
		return `<div class="itemTitle">${item}</div>
				<div class="itemPrice">${price}</div>
				<div class="itemDescription">${description}</div>`;
	})

	$menu.append(beerTitles);

});


//////////////////create news below

var newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';

var $news = $('.latest-news');

$.ajax(newsURL).then(function(object){

	// var latestNews = object.map(function({title, date_published, post}){
	// 	return `<div class="news-title">${title}</div>
	// 			<div class="date-published">${date_published}</div>
	// 			<div class="post">${post}</div>`;
	// })

	var latestNews = `<div class="news-title">${object.title}</div>
				<div class="date-published">${object.date_published}</div>
				<div class="post">${object.post}</div>`;

	$news.append(latestNews);

});



/////////////Daily special generated below

var $todaysSpecialHtml = $('.todays-special');

function displaySpecial (specials){
	var day = new Date();
	day = day.getDay();

	$todaysSpecialHtml.append(`<div class="todays-special-title">Beer: ${specials.beers[day].item}</div>
								<div class="todays-special-price">Price: $${specials.beers[day].price}</div>
								<div class="todays-special-style">Style: ${specials.beers[day].style}</div>
								<div class="todays-special-description">${specials.beers[day].description}</div>
								`);
}

displaySpecial(specials);

// Javascript Entry Point
import $ from 'jquery';

import specials from './specials';

var $menu = $('.menu');

var url = "https://json-data.herokuapp.com/restaurant/menu/3";

$.ajax(url).then(function(object){

	var beerTitles = object.Beer.map(function({item, price, description}){
		return `<div class="itemTitle">${item}</div>
				<div class="itemPrice">${price}</div>
				<div class="itemPrice">${description}</div>`;
	})

	$menu.append(beerTitles);

});

console.log(specials.beers);

var $todaysSpecialHtml = $('.todays-special');

function displaySpecial (specials){
	var day = new Date();
	day = day.getDay();

	$todaysSpecialHtml.append(`<div>Beer: ${specials.beers[day].item}</div>
								<div>Price: $${specials.beers[day].price}</div>
								<div>Style: ${specials.beers[day].style}</div>
								<div>${specials.beers[day].description}</div>
								`);
}

displaySpecial(specials);

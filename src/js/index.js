// Javascript Entry Point
import $ from 'jquery';

var $menu = $('.menu');

var url = "https://json-data.herokuapp.com/restaurant/menu/3";

$.ajax(url).then(function(object){

	var beerTitles = object.Beer.map(function({item, price, description}){
		return `<div class="itemTitle">${item}</div>
				<div class="itemPrice">${price}</div>
				<div class="itemPrice">${description}</div>`;
	})

	$menu.append(beerTitles);
	console.log(object.Beer);


});


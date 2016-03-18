// Javascript Entry Point
import $ from 'jquery';

import specials from './specials';


///////////////menu created below

var $menu = $('#menu-content');

var url = "https://json-data.herokuapp.com/restaurant/menu/3";

$.ajax(url).then(function(object){

	var beerTitles = object.Beer.map(function({item, price, description}){
		return `<div class="menu-item">
					<div class="itemTitle">${item}</div>
					
					<div class="item-descrip-price-line">
						<div class="itemDescription">${description}</div>
				    	<div class="itemPrice">${price}</div>
				    	<div class="itemInfoBlock"></div>
				    </div>
				</div>`;
	})

	$menu.append(beerTitles);

////////////// Entree items below 

	var entreeTitles = object.entrees.map(function({item, description, price}){

	return `
			<div class="entree-item">
				<div class="entree-name">${item}</div>

				<div class="entree-descrip-price-line">
					<div class="entree-description">${description}</div>
					<div class="entree-price">${price}</div>
				</div>
			</div>`;
	})//end var entreeTitles

	$menu.append(entreeTitles);
////////////// Entree icon bar below

}); //end ajax

//////////////////create news below

var newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';

var $news = $('.latest-news');

$.ajax(newsURL).then(function(object){

	var latestNews = `<div class="news-title"><strong>${object.title}</strong></div>
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
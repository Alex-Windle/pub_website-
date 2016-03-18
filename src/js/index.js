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
				    </div>
				</div>`;
	})

	$menu.append(beerTitles);

////////////// Entree items below 

	var entreeTitles = object.entrees.map(function({item, description, price, allergies, favorite, spicy, vegan}){

	// var $entreeIcon = $('.entree-icon');
	var $menuTest = $('#menu-content');

				var icon = ""; 

				if (allergies > 0) {
					icon = "<i class='fa fa-exclamation-triangle' title='Allergy Information: May contain gluten and/or peanut dust.'></i>";
					console.log("allergies");

				} else if (favorite > 0) {
					icon = "<i class='fa fa-star' title='A Pub on Pryor Favorite!'></i>";
					console.log("favorite");
			
				} else if (spicy > 0) {
					icon = "<i class='fa fa-fire' title='Spicy.'></i>";
					console.log("spicy");
				} else {
					icon = "<i class='fa fa-fire' title='Vegan.'></i>";
					console.log("vegan");
				}

	return `
			<div class="entree-item">
				<div class="entree-name-icon-line">
					<div class="entree-name">${item}</div>
					<div class="entree-icon">${icon}</div>
				</div> 

				<div class="entree-descrip-price-line">
					<div class="entree-description">${description}</div>
					<div class="entree-price">${price}</div>
				</div>
			</div>`;
	}); //function entreeTitles 

	$menu.append(entreeTitles);
					
					//// Entree icon bar below ////

	//Put your function here that sorts each object in the array by property
	// props are "allergies" "fav" "spicy" "vegan"
	      // add a new js file to include templates. EXPORT templates
	      // add an IMPORT statement to THIS file to pull in templates
	      // make the JS magic happen!!!!! :-) :-) :-) :-) 

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

	$todaysSpecialHtml.append(`<h2 class="todays-special-title">${specials.beers[day].item}</h2>
								<img src="${specials.beers[day].imgUrl}" alt="">
								<div class="todays-special-price">Price: $${specials.beers[day].price}</div>
								<div class="todays-special-style">Style: ${specials.beers[day].style}</div>
								<div class="todays-special-description">${specials.beers[day].description}</div>
								`);
}

displaySpecial(specials);
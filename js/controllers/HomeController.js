app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'Deep Impact', 
      iscore:	6.1,
      rating:	'PG-13',
      runtime:	120,
      released:	new Date('1998'),
      country:	'USA',
      posters:	['img/Deepimpact.jpg',],
      imdb:		'http://www.imdb.com/title/tt0120647/?ref_=nv_sr_1',
      website:	'https://www.facebook.com/Deep-Impact-50528340969/',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'Harry Potter Goblet of Fire ', 
      iscore:	7.7,
      rating:	'PG-13',
      runtime:	166,
      released:	new Date('2005'),
      country:	'USA',
      posters:	['img/HP Goblet of Fire.jpg'],
      imdb:		'http://www.imdb.com/title/tt0330373/?ref_=nv_sr_3',
      website:	'https://www.facebook.com/harrypottermovie/',
      likes:	1566,
      dislikes:	5550,
      posterindex: 0
	},
    { 
      title:	'Captain America: Civil War', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date(''),
      country:	'USA',
      posters:	['img/CA Civil War.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'Speed', 
      iscore:	8.9,
      rating:	'R',
      runtime:	116,
      released:	new Date('1994'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111257/',
      website:	'https://www.facebook.com/Speed50Mph/',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Titanic', 
      iscore:	7.8,
      rating:	'PG-13',
      runtime:	194,
      released:	new Date('1993'),
      country:	'USA',
      posters:	['img/titanic.jpg'],
      imdb:		'http://www.imdb.com/title/tt0120338/?ref_=nv_sr_2',
      website:	'https://www.facebook.com/TitanicMovie/',
      likes:	207706,
      dislikes:	23908,
      posterindex: 0
	}
	
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	
$scope.title = "Shreya's Top 8 Movies";
$scope.owner = "Shreya";
$scope.github = "https://github.com/sap49/IS219s18p3Shreya";
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
	
	
	
	
	
	
	
	
}]);

;(function(){
	console.log("what?");
	console.log("why u gotta talk about my moma?");

	famHref = document.getElementById('fonts').href.match(/family=.*/);
	families = famHref.pop().replace('family=','').split(/\|/);


	milfs = [
		'My Intestines Love Food',
		'Macaroni Is Lovely Food',
		'Mioow I Like Fish',
		'Men I Lust For',
		'Make It Last Forever',
	];
	// 'Mom I Like as a Friend',

	setTimeout(function() {
		i = Math.floor(Math.random() * families.length);
		family = families[i].replace("\+", " ");
		console.log(i, family);
		h1 = document.getElementsByTagName('h1')[0];
		h2 = document.getElementsByTagName('h2')[0];
		h3 = document.getElementsByTagName('h3')[0];
		h1.style.fontFamily = family;
		h2.style.fontFamily = family;
		h3.style.fontFamily = family;
	}, 33);

	setTimeout(function() {
		j = Math.floor(Math.random() * milfs.length);
		h3 = document.getElementsByTagName('h3')[0];
		title = document.getElementsByTagName('title')[0];
		h3.innerText = milfs[j];
		title.innerText = milfs[j];
	}, 33);



})();

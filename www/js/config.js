var interstitiel= true;
var seconde= 10000;//milli


if(interstitiel==true){

	setTimeout(function() {
		document.location.href="#/app/playlists";
	},seconde);
}
else{

	document.location.href="#/app/playlists/1";
}

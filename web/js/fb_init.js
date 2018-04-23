window.fbAsyncInit = function() {
	FB.init({
		appId      : '2050570888522386',
		cookie     : true,
		xfbml      : true,
		version    : 'v2.12'
	});
	  
	FB.AppEvents.logPageView();
	
	//Let's page finish loading before checking user's login status
	window.onload = function(){
		FB.getLoginStatus(function(response){
		  if (response.status === 'connected') {
			postLoginSetup();
		  }else{
			removeOverlay();
		  }
		});
	}
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
	  (function(d, s, id){
		 var js, fjs = d.getElementsByTagName(s)[0];
		 if (d.getElementById(id)) {return;}
		 js = d.createElement(s); js.id = id;
		 js.src = "https://connect.facebook.net/en_US/sdk.js";
		 fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));

	   var amazonLink = 'https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=';
	   
	   function statusChangeCallback(response){

	   }

	   function logoutFunction(response){
				document.getElementById('outputBlock').innerHTML = 'You have logged out of GiftLink';
        }

		function specialLogin(){
			FB.login(function(response) {

			if(response.status === 'connected'){
				console.log('Logged in and authenticated');
				document.getElementById('outputBlock').innerHTML = 'Login Successful! <br>';
				document.getElementById('outputBlock').innerHTML += 'Welcome, ';

				FB.api('/me', {fields: 'name,birthday'}, function(response) {
				document.getElementById('outputBlock').innerHTML += response.name + "!<br>Birthday: ";
				document.getElementById('outputBlock').innerHTML += response.birthday;
			});

			listMusic();
			listMovies();
			} 

		else {
		console.log('Not authenticated');
			document.getElementById('outputBlock').innerHTML = 'You are not logged in';
		}
			   }, {scope:'email,user_birthday,user_likes', return_scopes:true});
		}

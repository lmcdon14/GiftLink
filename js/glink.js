
//Used to dynamically generate Amazon search links of a FaceBook user's interests
var amazonLink = 'https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=';

//Enable or disable output to console.log()
const DEBUG_MODE =  1;


function appLogin(){
	FB.login(function(response) {

		if(response.status === 'connected'){
			if(DEBUG_MODE) console.log('Logged in and authenticated');
			
		  /* Setting up the HTML/sections for each block of output after a successful login
			 introBlock for displaying announcements/instructions and contains an input field (textbox)
			 for searching/filtering friends
		  */
		  
			$('#introBlock').addClass('hidden');
			$('#outputBlock').removeClass('hidden')
							 .empty()
							 .append('<br>Click on a friend below to see their interests<br><br>')
							 .append('Search Friends: <input id = "friendSearch" type="text" name="searchName" value=""><br>');
			$('#friendBlock').removeClass('hidden');
			$('#loginPanel').addClass('hidden');
			$('#logoutPanel').removeClass('hidden');
			
			//Setting the top bar to display the the logged in user's profile picture and name
			FB.api('/me', {fields: 'id,name,birthday'}, function(response) {
				$('#profilePic').attr('src', 'http://graph.facebook.com/' + response.id + '/picture?type=normal');
				$('#nameBadge').text(response.name);
			});
			
			//Grab and list the user's friends in the #friendBlock HTML element
			listFriends();


			//Dynamically filter friends as you type by attaching an event listener to the #friendSearch input field
			$('#friendSearch').on("keyup", function() {
				if(DEBUG_MODE) console.log('keypress handler triggered');
				var inputText = $('#friendSearch').val();

				$(".fb-user").each(function(){
					var found = strCmp($(this).attr("data-blockID"),inputText);
					if(found){
						if(DEBUG_MODE) console.log('found');
						$(this).removeClass('hidden');
					}
					else {
						if(DEBUG_MODE) console.log('not found');
						$(this).addClass('hidden');
					}
				});
			});
		}

		else {
			if(DEBUG_MODE) console.log('Not authenticated');
		}
		
	}, {scope:'email,user_birthday,user_likes,user_friends', return_scopes:true});
	   /* Above are the permissions to request from the user logging in
		  Only pops up with a FaceBook login dialog if they haven't given access before
		  or there are new permissions that they haven't granted access to
	   */
}


//Fills up the #friendBlock with collapsible panels of the user's friends
function listFriends() {
		FB.api('/me/friends', {fields: 'id,name,birthday'}, 
			function (response) {
				if(DEBUG_MODE) console.log(response);
				
				$('#friendBlock').empty();
				var friend;
				var friends = response.data.sort(function(a, b) {return a.name.localeCompare(b.name);});
				
				for(friend in friends){
					var user_id = friends[friend].id;
					var name = friends[friend].name;
					var birthday = friends[friend].birthday;
					
					//Wrapping each user in a unique div to make the search filtering easier
					$('#friendBlock').append('<div class = "fb-user" data-blockID = "' + name + '"></div>');
					
					//jQuery unique to the current friend's block 
					var query = "[data-blockID = '" + name + "']";
					$(query).append(''
									 + '<a data-toggle="collapse" data-target="#' + user_id + '-interests">'
									 + '<div class="friend-panel fluid-panel" id="' + user_id + '-panel">'
									 + '<span><img class="friend-pic" src="http://graph.facebook.com/' + user_id + '/picture?type=normal"></img>'
									 + '<span class="friend-name">' + name + '</span></span><span class="friend-birthday">' + birthday + '</span></div></a>'
									 + '<div class="collapse interestPanel" id="' + user_id + '-interests">'
									 + '<div class="row">'
									 + '<div class="col-4"><p class = "text-center" id = "' + user_id + '-musicList">'
									 + '<button onclick="listMusic(' + user_id + ')">Music</button></p></div>'
									 + '<div class="col-4"><p class = "text-center" id = "' + user_id + '-televisionList">'
									 + '<button onclick="listTelevision(' + user_id + ')">Television</button></p></div>'
									 + '<div class="col-4"><p class = "text-center" id = "' + user_id + '-moviesList">'
									 + '<button onclick="listMovies(' + user_id + ')">Movies</button></p></div></div></div>');
				}
			}
		);
	}

function appLogout(response){
	$('#introBlock').removeClass('hidden');
	$('#outputBlock').addClass('hidden')
					 .empty();
	$('#friendBlock').addClass('hidden');
	$('#logoutPanel').addClass('hidden');
	$('#loginPanel').removeClass('hidden');
	$('#nameBadge').text('');
	$('#profilePic').attr('src', '');
}

//Case insensitive search (i.e. Does str1 contain str2 ?)
function strCmp(str1, str2){
	return (str1.toLowerCase().indexOf(str2.toLowerCase()) >= 0); 
}



//Interest/Like Category Functions
function listMusic(userID) {
	updateInterest(userID, 'music');
}
function listTelevision(userID) {
	updateInterest(userID, 'television');
}
function listMovies(userID) {
	updateInterest(userID, 'movies');
}


/*  
	Customizable function to get and update a user's interests from the appropriate endpoint
*/

function updateInterest(userID, interest){
	var endpoint = '/' + userID + '/' + interest;
	if(DEBUG_MODE) console.log(endpoint);
	
	var target;
	if(interest == "music"){ target = ('' + userID + '-musicList'); }
	else if(interest == "television"){ target = ('' + userID + '-televisionList'); }
	else if(interest == "movies"){ target = ('' + userID + '-moviesList'); }

	FB.api(endpoint, function(response){
		if(response && !response.error){
			listInterest(response, target);
		}
	});
}


/*
	Iterates over a response's data, generates amazonSearch link, and appends it to
	the targetElem
*/
function listInterest(response, targetElem){
	query = '#' + targetElem;
	
	if(DEBUG_MODE){
		console.log(targetElem);
		console.log(query);
		console.log(response);
	}
	
	for(item in response.data) {
		$(query).append('<br>');
		var name = response.data[item].name;
		var sname = name.replace(/ /g, "+");
		$(query).append('<a class = "jqPlaceholder" target = "_blank" href = "" ></a>');
		$('.jqPlaceholder').attr('href', amazonLink + sname);
		$('.jqPlaceholder').html(name);
		$('.jqPlaceholder').removeClass('jqPlaceholder');
	}
}


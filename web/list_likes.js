	function listMusic(){
		FB.api('/me/music', function (response) {
			if (response && !response.error) {
				console.log(response);
				document.getElementById('outputBlock').innerHTML += "!<br>Music: <br>";
				var item;
				for(item in response.data) {
					var name = response.data[item].name;
					var sname = name.replace(/ /g, "+");
					var outputBlock = document.getElementById('outputBlock');
					var aTag = document.createElement('a');
					aTag.setAttribute("target", "_blank");
					aTag.setAttribute("href", amazonLink + sname);
					aTag.innerHTML = name;
					outputBlock.appendChild(aTag);
					document.getElementById('outputBlock').innerHTML += "<br>";
				}
			}
		});	
	}

	function listMovies(){
		FB.api('/me/movies', function (response) {
			if (response && !response.error) {
				console.log(response);
				document.getElementById('outputBlock').innerHTML += "<br>Movies: <br>";
				var item;
				for(item in response.data) {
					var name = response.data[item].name;
					var sname = name.replace(/ /g, "+");
					var outputBlock = document.getElementById('outputBlock');
					var aTag = document.createElement('a');
					aTag.setAttribute("target", "_blank");
					aTag.setAttribute("href", amazonLink + sname);
					aTag.innerHTML = name;
					outputBlock.appendChild(aTag);
					document.getElementById('outputBlock').innerHTML += "<br>";
				}
			}
		});	
	}

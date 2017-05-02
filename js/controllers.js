angular.module('queryExample')
	.controller('queryController', function($scope, $http) {
		var API_KEY = "be78ab7bb822bf90173073ba3336431b403e1ce5"
		$scope.getGames = function(gameTitle) {
			console.log("HEY")
			console.log("From HTML we recived => " + gameTitle)
			
			// this is the FIRST endpoint api!
			return $http.get("https://floating-mountain-70543.herokuapp.com/search/?api_key=" + API_KEY + "&format=json&query=" + gameTitle + "&resources=game")
				 //PROMISE THEN here...
				.then(function(response) {
					$scope.gamesInfo = response.data.results
					console.log($scope.gamesInfo)
				})
				// and catch errors
				.catch(function(response) {
					console.log(response.data);
				});
		}

		$scope.getInfo = function(gameId) {
			console.log(gameId)
			// this is the SECOND endpoint api!
			return $http.get("https://floating-mountain-70543.herokuapp.com/search/ " + gameId +"?api_key=" + API_KEY)
				//promise HERE
				.then(function(response) {
					$scope.gamesDetails = response.data.results
					console.log($scope.gamesDetails)
						//$scope.myStyle={display:'inline'}
				})
				.catch(function(response) {
					console.log(response.data);
				});
		}
	})

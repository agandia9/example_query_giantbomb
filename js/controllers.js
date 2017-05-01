angular.module('queryExample')
	.controller('queryController', function($scope, $http) {
		$scope.getGames = function(gameTitle) {
			console.log("HEY")
			console.log("From HTML we recived => " + gameTitle)
			// this is the FIRST endpoint api!
			return $http.post('https://floating-mountain-70543.herokuapp.com/getInfo', { "gameTitle": gameTitle })
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
			return $http.post('https://floating-mountain-70543.herokuapp.com/getMoreInfo', { "gameId": gameId })
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

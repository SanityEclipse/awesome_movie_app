app.controller("apiController", function ($scope, $http) {

$scope.movieSearch= function(search){
    $http.get('http://www.omdbapi.com/?s='+ search)
      .then(function(response){
      console.log(response);
      $scope.movieData = response.data.Search;
      })
    }
  $scope.movieSelect= function(id){
      $http.get('http://www.omdbapi.com/?i='+id)
        .then(function(response){
        console.log(response);
        $scope.movieID = response.data
        })
      }
    });

app.controller('HomeController', function($scope){
  $scope.view = {};
  $scope.view.message = "This is the HOME view";
});
app.controller('ShowController', function($scope){
  $scope.view = {};
  $scope.view.message = "This is SHOW view"
});

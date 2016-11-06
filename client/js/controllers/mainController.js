app.controller('mainController', function($scope, redditService) {

  $scope.sort = '-votes'
  $scope.view = {};
  $scope.view.search = '';

  $scope.view = {};

  redditService.all().then(function(city) {
          $scope.view.citiesArray = city.data
      })

      $scope.votes = function(city) {
        if (city.votes > 0) {
          return 'positive';
        } else if (city.votes < 0) {
          return 'negative';
        } else {
          return '';
        }
      }

      $scope.upVote = function(city) {
         city.votes += 1
     }

     $scope.downVote = function(city) {
         city.votes -= 1
     }

     $scope.addPost = function(city) {
       console.log('city in controller:', city);
       redditService.new(city).then(function(results) {
         console.log('addedCity back from route:', results);
        $scope.view.citiesArray.push(results.data[0]);
        $scope.city = {}
        $scope.userForm.$setPristine()
    })
}


  //   function createId() {
  //     let id = $scope.view.citiesArray.length
  //     return id
  //   }
   //

  //   $scope.addPost = function(city) {
  //       $scope.city = city;
  //       $scope.city.id = createId();
  //       $scope.city.date = moment().calendar();
  //       $scope.city.votes = 0;
  //       $scope.city.comments = [];
  //       $scope.view.citiesArray.push($scope.city);
  //       $scope.userForm.$setPristine()
  //       $scope.city = {};
  //       console.log(city);
  //   }
   //
  //   $scope.newComment = {};
  //   $scope.addComment = function(city) {
  //       let id = city.id
  //       // console.log(id);
  //       let comment = angular.copy($scope.newComment)
  //       $scope.view.citiesArray[id].comments.push(comment);
  //       $scope.newComment = {};
  //   }
   //
   //


});

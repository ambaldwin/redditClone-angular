app.controller('postController', function($scope, redditService, $location, $routeParams) {

    var id = $routeParams.id

      redditService.one(id).then(function(post) {
          $scope.city = post.data
      })

      $scope.submitEditPost = function(city) {
        console.log('city in the controller', city);
        // var editedPirate = $scope.pirates
        redditService.edit(city).then(function() {
            $location.url('/')
        })
    }
});

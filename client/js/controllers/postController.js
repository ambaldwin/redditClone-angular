app.controller('postController', function($scope, redditService, $location, $routeParams) {

    var id = $routeParams.id

      redditService.one(id).then(function(post) {
          $scope.city = post.data
      })

      $scope.submitEditPost = function(city) {
        console.log('city in the controller', city);
        redditService.edit(city).then(function() {
            $location.url('/')
        })
    }

    $scope.deletePost = function(city) {
      console.log('in the delete post controller:', city);
      redditService.delete(city).then(function() {
          $location.url('/')
      })
  }
});

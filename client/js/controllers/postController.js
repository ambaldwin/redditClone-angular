app.controller('postController', function($scope, redditService, $location, $routeParams) {
    var id = $routeParams.id

    redditService.one(id).then(function(post) {
        console.log('post in one post controller', post);
        $scope.city = post.data[0]
    })

    $scope.upVote = function(city) {
        city.votes += 1
        redditService.up(city).then(function() {})
    }

    $scope.downVote = function(city) {
        city.votes -= 1
        redditService.down(city).then(function() {})
    }


    $scope.submitEditPost = function(city) {
        redditService.edit(city).then(function() {
            $location.url('/')
        })
    }

    $scope.deletePost = function(city) {
        redditService.delete(city).then(function() {
            $location.url('/')
        })
    }


});

app.controller('mainController', function($scope, redditService, $location) {

            $scope.sort = '-votes'
            $scope.view = {};
            $scope.view.search = '';

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
                redditService.up(city).then(function() {})
            }

            $scope.downVote = function(city) {
                city.votes -= 1
                redditService.down(city).then(function() {})
            }

            $scope.addPost = function(city) {
                redditService.new(city).then(function(results) {
                    $scope.view.citiesArray.push(results.data[0]);
                    $scope.city = {}
                    $scope.userForm.$setPristine()
                })
            }


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

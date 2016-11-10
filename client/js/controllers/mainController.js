app.controller('mainController', function($scope, redditService, $location) {

            $scope.sort = '-votes'
            $scope.view = {};
            $scope.view.search = '';
            $scope.error = ''

            redditService.all().then(function(city) {
                $scope.view.citiesArray = city.data
            })

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
                }).catch(function(error) {
                  $scope.error = 'You must be logged in to create a new post.'
                })
            }

            $scope.logOut = function() {
              redditService.logout().then(function(data) {
                $scope.error = data.data.message
                  $location.url('/')
              })
            }

});

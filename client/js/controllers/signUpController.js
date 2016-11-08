app.controller('signUpController', function($scope, redditService, $location) {

  $scope.submitSignUp = function(newUser) {
        redditService.signup(newUser).then(function(newUser) {
            $scope.newUser = {}
             $scope.signUp.$setPristine()
             $location.url('/')
        })
    }

    $scope.submitLogIn = function(returningUser) {
          redditService.login(returningUser).then(function(loggedinUser) {
              $scope.returningUser = {}
               $scope.logIn.$setPristine()
               $location.url('/')
          })
      }

});

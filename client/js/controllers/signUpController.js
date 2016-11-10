app.controller('signUpController', function($scope, redditService, $location) {

  $scope.submitSignUp = function(newUser) {
        redditService.signup(newUser).then(function(newUser) {
            $scope.newUser = {}
             $scope.signUp.$setPristine()
             $location.url('/')
        }).catch(function(error) {
          $scope.error = 'Already a user, please login!'
        })
    }

    $scope.submitLogIn = function(returningUser) {
          redditService.login(returningUser).then(function(loggedinUser) {
              $scope.returningUser = {}
               $scope.logIn.$setPristine()
               $location.url('/')
          }).catch(function(error) {
            $scope.error = 'Bad email or password! Please try again.'
          })
      }
});

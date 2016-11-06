app.controller('signUpController', function($scope, redditService, $location) {

  $scope.submitSignUp = function(newUser) {
        redditService.signup(newUser).then(function(newUser) {
          console.log('getting in the signUp Controller:', newUser);
            $scope.newUser = {}
             $scope.signUp.$setPristine()
             $location.url('/')
        })
    }

    $scope.submitLogIn = function(returningUser) {
      console.log('returningUser in controller', returningUser);
          redditService.login(returningUser).then(function(loggedinUser) {
            console.log('object coming back after server route:', loggedinUser);
              $scope.returningUser = {}
               $scope.logIn.$setPristine()
               $location.url('/')
          })
      }
});

var app = angular.module('app', []);

app.controller('mainController', function($scope) {


  $scope.citiesArray = [{
        title: 'Denver',
        author: 'Anna Baldwin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/2006-03-26_Denver_Skyline_I-25_Speer.jpg',
        description: 'asd;fljas;dlfja;sldfj;alsdfj;lasdfj;lasdjf;lasdfj;ladsfj;lkadjsf;lkadjsf;lkj'
    }, {
        title: 'Kearney',
        author: 'Ben Fox',
        description: 'asd;fljas;dlfja;sldfj;alsdfj;lasdfj;lasdjf;lasdfj;ladsfj;lkadjsf;lkadjsf;lkj',
        image: 'http://www.fillmurray.com/460/300'
    }, {
        title: 'Chicago',
        author: 'Laura Hranac',
        image: 'https://tctechcrunch2011.files.wordpress.com/2015/02/chicago.jpg',
        description: 'asd;fljas;dlfja;sldfj;alsdfj;lasdfj;lasdjf;lasdfj;ladsfj;lkadjsf;lkadjsf;lkj'
    }]

    // $scope.votes = function(city) {
    //   if (city.votes > 0) {
    //     return 'positive';
    //   } else if (city.votes < 0) {
    //     return 'negative';
    //   } else {
    //     return '';
    //   }
    // }

    $scope.addPost = function(city) {
        $scope.city = {};
        $scope.citiesArray.push(city);
        $scope.userForm.$setPristine()
        console.log(city);
    }


  //   $scope.upVote = function(city) {
  //      city.votes += 1
  //  }
   //
  //  $scope.downVote = function(city) {
  //      city.votes -= 1
  //  }

});

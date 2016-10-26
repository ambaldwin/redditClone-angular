var app = angular.module('app', []);

app.controller('mainController', function($scope) {

  $scope.sort = '-votes'
  $scope.view = {};
  $scope.view.search = '';

  $scope.view.citiesArray = [{
        title: 'Denver',
        author: 'Anna Baldwin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/2006-03-26_Denver_Skyline_I-25_Speer.jpg',
        description: 'asd;fljas;dlfja;sldfj;alsdfj;lasdfj;lasdjf;lasdfj;ladsfj;lkadjsf;lkadjsf;lkj',
        votes: 3,
        date: 'July 12, 2016',
        comments: []
    }, {
        title: 'Kearney',
        author: 'Ben Fox',
        description: 'asd;fljas;dlfja;sldfj;alsdfj;lasdfj;lasdjf;lasdfj;ladsfj;lkadjsf;lkadjsf;lkj',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/GPRRAMKearney.jpg',
        votes: -50,
        date: 'February 12, 2016',
        comments: []
    }, {
        title: 'Chicago',
        author: 'Laura Hranac',
        image: 'https://tctechcrunch2011.files.wordpress.com/2015/02/chicago.jpg',
        description: 'asd;fljas;dlfja;sldfj;alsdfj;lasdfj;lasdjf;lasdfj;ladsfj;lkadjsf;lkadjsf;lkj',
        votes: 2,
        date: 'January 1, 2016',
        comments: []
    }]

    $scope.votes = function(city) {
      if (city.votes > 0) {
        return 'positive';
      } else if (city.votes < 0) {
        return 'negative';
      } else {
        return '';
      }
    }

    $scope.addPost = function(city) {
        $scope.city.date = moment().calendar();
        $scope.city.votes = 0;
        $scope.city = {};
        $scope.city.comments = [];
        $scope.view.citiesArray.push(city);
        $scope.userForm.$setPristine()
        console.log(city);
    }


    $scope.upVote = function(city) {
       city.votes += 1
   }

   $scope.downVote = function(city) {
       city.votes -= 1
   }

});

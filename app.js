var app = angular.module('app', []);

app.controller('mainController', function($scope) {

  $scope.sort = '-votes'
  $scope.view = {};
  $scope.view.search = '';

  $scope.view.citiesArray = [{
        id: 0,
        title: 'Denver',
        author: 'Anna Baldwin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/2006-03-26_Denver_Skyline_I-25_Speer.jpg',
        description: 'Denver, officially the City and County of Denver, is the capital and most populous municipality of the U.S. state of Colorado. Denver is located in the South Platte River Valley on the western edge of the High Plains just east of the Front Range of the Rocky Mountains. The Denver downtown district is located immediately east of the confluence of Cherry Creek with the South Platte River, approximately 12 mi (19 km) east of the foothills of the Rocky Mountains. Denver is nicknamed the Mile-High City.',
        votes: 7,
        date: 'Yesterday at 10:57 AM',
        comments: []
    }, {
        id: 1,
        title: 'Kearney',
        author: 'Ben Fox',
        description: 'Kearney is a city in and the county seat of Buffalo County, Nebraska, United States. The population was 30,787 at the 2010 census. It is home to the University of Nebraska at Kearney. The westward push of the railroad as the Civil War ended gave birth to the community. Strategically located on I-80 with convenient access to major markets like Omaha-Lincoln, Denver, Kansas City, Des Moines, Wichita and Cheyenne, Kearney is at the center of a 7-state region and 20 million people.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/GPRRAMKearney.jpg',
        votes: -4,
        date: 'Last Monday at 9:19 PM',
        comments: []
    }, {
        id: 2,
        title: 'Chicago',
        author: 'Laura Hranac',
        image: 'https://tctechcrunch2011.files.wordpress.com/2015/02/chicago.jpg',
        description: 'Chicago is the third-most populous city in the United States. With over 2.7 million residents, it is the most populous city in the state of Illinois and the Midwestern United States, and the county seat of Cook County. The Chicago metropolitan area, often referred to as Chicagoland, has nearly 10 million people and is the third-largest in the U.S.',
        votes: 2,
        date: 'January 1, 2016',
        comments: []
    }]

    function createId() {
      let id = $scope.view.citiesArray.length
      return id
    }

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
        $scope.city.id = createId();
        $scope.city.date = moment().calendar();
        $scope.city.votes = 0;
        $scope.city = {};
        $scope.city.comments = [];
        $scope.view.citiesArray.push(city);
        $scope.userForm.$setPristine()
        console.log(city);
    }

    $scope.newComment = {};
    $scope.addComment = function(city) {
        let id = city.id
        let comment = angular.copy($scope.newComment)
        $scope.view.citiesArray[id].comments.push(comment);
        console.log(comment);
        // console.log('$scope.comments:', $scope.comments);
    }


    $scope.upVote = function(city) {
       city.votes += 1
   }

   $scope.downVote = function(city) {
       city.votes -= 1
   }

});

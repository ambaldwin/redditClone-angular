app.service('redditService', function ($http) {
  return {
    all: function() {
      return $http.get('./api/allposts');
    },
    new: function(city) {
      console.log('city in the service:', city);
      return $http.post('./api/allposts', city);
    },
    signup: function(newUser) {
      return $http.post('./signup/signup', newUser);
    },
    login: function(returningUser) {
      return $http.post('./login/login', returningUser);
    }
    // putOne: function(editedPirate) {
    //   const id = editedPirate.id
    //   return $http.put(`/api/pirates/${id}`, editedPirate)
    // },
    // delete: function(id) {
    //   return $http.delete(`/api/pirates/${id}`)
    // }
  }
})

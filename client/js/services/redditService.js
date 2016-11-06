app.service('redditService', function ($http) {
  return {
    all: function() {
      return $http.get('./api/allposts');
    },
    signup: function(newUser) {
      console.log('newUser in service', newUser);
      return $http.post('./signup/signup', newUser);
    },
    login: function(returningUser) {
      console.log('in the login service', returningUser);
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

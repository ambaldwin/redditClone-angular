app.service('redditService', function ($http) {
  return {
    all: function() {
      return $http.get('./api/allposts');
    },
    new: function(city) {
      return $http.post('./api/allposts', city);
    },
    signup: function(newUser) {
      return $http.post('./signup/signup', newUser);
    },
    login: function(returningUser) {
      return $http.post('./login/login', returningUser);
    },
    one: function(id) {
      return $http.get(`/onepost/${id}`)
    },
    edit: function(editedCity) {
      const id = editedCity.postId
      console.log('id in the service', id);
      return $http.put(`/onepost/${id}`, editedCity)
    }
  }
})

app.service('redditService', function ($http) {
  return {
    all: function() {
      return $http.get('./api/allposts');
    }
    // new: function(pirate) {
    //   return $http.post('/api/pirates', pirate);
    // },
    // one: function(id) {
    //   console.log('pirates id in service:', id);
    //   return $http.get('/api/pirates/' + id);
    // },
    // putOne: function(editedPirate) {
    //   const id = editedPirate.id
    //   return $http.put(`/api/pirates/${id}`, editedPirate)
    // },
    // delete: function(id) {
    //   return $http.delete(`/api/pirates/${id}`)
    // }
  }
})

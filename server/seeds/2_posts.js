exports.seed = function(knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([{
        user_id: 1,
        title: 'Kearney',
        description: 'Kearney is a city in and the county seat of Buffalo County, Nebraska, United States. The population was 30,787 at the 2010 census. It is home to the University of Nebraska at Kearney. The westward push of the railroad as the Civil War ended gave birth to the community. Strategically located on I-80 with convenient access to major markets like Omaha-Lincoln, Denver, Kansas City, Des Moines, Wichita and Cheyenne.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/GPRRAMKearney.jpg',
        votes: -3
      },
      {
        user_id: 2,
        title: 'Denver',
        description: 'Denver, officially the City and County of Denver, is the capital and most populous municipality of the U.S. state of Colorado. Denver is located in the South Platte River Valley on the western edge of the High Plains just east of the Front Range of the Rocky Mountains. The Denver downtown district is located immediately east of the confluence of Cherry Creek with the South Platte River.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/2006-03-26_Denver_Skyline_I-25_Speer.jpg',
        votes: 4
      },
      {
        user_id: 3,
        title: 'Chicago',
        description: 'Chicago is the third-most populous city in the United States. With over 2.7 million residents, it is the most populous city in the state of Illinois and the Midwestern United States, and the county seat of Cook County. The Chicago metropolitan area, often referred to as Chicagoland, has nearly 10 million people and is the third-largest in the U.S.',
        image: 'https://tctechcrunch2011.files.wordpress.com/2015/02/chicago.jpg',
        votes: 2
      }]);
    });
};

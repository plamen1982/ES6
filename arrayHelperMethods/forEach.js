//ES5 syntax
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}
//ES6 syntax
function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
      ];
     function itteratePost(post) {
        savePost(post)
      }
      posts.forEach(itteratePost)
}

/** 
 *The array below contains an array of objects, each of which is a representation of an image.
 *Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  
 *The area of an image can be calculated as 'image.height * image.width'.
*/
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];

  function calculateArea(image) {
    areas.push( image.height * image.width )
  };

images.forEach(calculateArea)
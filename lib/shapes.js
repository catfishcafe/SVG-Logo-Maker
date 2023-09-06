class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
}

// class Circle extends Shape {
//   constructor(shapeColor) {
//     super (shapeColor);
//     not sure what goes here to make it a circle :( code? like the word "circle"? I'm going to see what code's like for other shapes, cuz I think I'll have to change the dimensions...
//   }   
// }

// 300x200 pixel image

//this is the code that was working...
`<svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="200" fill="${logo.shapeColor}" /></svg>`


//class Square extends Shape

//class Triangle extends Shape




//stuff from class...

// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the BlogPost class constructor.
const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(
  'Jane Doe',
  'This post is really awesome!',
  '12/20/2021',
  '🐶😺🐍'
);
// TODO: Log both newly created BlogPost and Comment to the console.
console.log(newPost);
console.log(newComment);

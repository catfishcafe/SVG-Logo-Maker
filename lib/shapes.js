class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="200" r="160" fill="${shapeColor}" /></svg>`
  }   
}

class Square extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${shapeColor}" /></svg>`
  }   
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super (shapeColor);
    this.svg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="281, 216 50, 216 166, 16
    " fill="${shapeColor}" /></svg>`
  }   
}

// //stuff from class...

// // TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
// class ForumItem {
//   constructor(authorName, text, createdOn) {
//     this.authorName = authorName;
//     this.text = text;
//     this.createdOn = createdOn;
//   }
// }

// // TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
// class BlogPost extends ForumItem {
//   constructor(authorName, title, text, createdOn) {
//     super(authorName, text, createdOn);
//     this.title = title;
//     this.comments = [];
//   }

//   addComment(comment) {
//     this.comments.push(comment);
//   }
// }

// class Comment extends ForumItem {
//   constructor(authorName, text, createdOn, reaction) {
//     super(authorName, text, createdOn);
//     this.reaction = reaction;
//   }
// }

// // TODO: Create a new object using the BlogPost class constructor.
// const newPost = new BlogPost(
//   'John Doe',
//   'My Fourth Post',
//   'Dogs, cats, and snakes are super cute!',
//   '12/19/2021'
// );

// // TODO: Create a new object using the Comment class constructor.
// const newComment = new Comment(
//   'Jane Doe',
//   'This post is really awesome!',
//   '12/20/2021',
//   '🐶😺🐍'
// );
// // TODO: Log both newly created BlogPost and Comment to the console.
// console.log(newPost);
// console.log(newComment);

module.exports = { Circle, Square, Triangle }
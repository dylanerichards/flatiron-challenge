# JavaScript Assessment

For this assignment, we'll be working with an Instagram-style domain. We have two models - Image and Comment.
For our purposes, an Image has many Comments, and a Comment belongs to an Image.

## Topics

+ Class vs Instance methods in ES6
+ Object Relationships
+ DOM manipulation with jQuery or vanilla JS
+ Event Listeners

## Notes

Your goal is to build out all of the methods listed in the deliverables. Do your best to follow JavaScript best practices.

To run your html:

- Inside your cloned down folder, in terminal, type `pwd` to get your full file path. Copy and paste that path into your browser url and include `/index.html` to the end of that path.

**To Submit** - once you've completed all the deliverables, please copy/paste your three class definitions into the `solution.js` file. Please don't submit the lab until we give you the signal.

## Deliverables

Build out the following methods on the `CommentsController` class (Use ES6 syntax)

+ `CommentsController.prototype.addCommentFormListener()`
  + iterates through each comment form and adds an eventlistener to trigger a function on form submit
  + function should grab the imageId + comment and create a new Comment with those arguments
  + execute the render function on that found image object to append the new comment
+ `CommentsController.prototype.render(commentObject)`
  + selects the appropriate `ul` for this comment to be added to
  + appends the new comment element to this `ul`
  + Don't try to copy the `ImagesController.render` function because that is implemented differently

Build the following on the comment class model (Use ES6 syntax)

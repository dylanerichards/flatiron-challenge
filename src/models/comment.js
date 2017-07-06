class Comment {
  constructor(commentContent, imageId) {
    this.commentContent = commentContent;
    this.imageId = imageId;
    this.image = this.findImage(imageId);
    this.constructor.all.push(this);
  }

  findImage(imageId) {
    var image = Image.all[imageId]

    image.comments.push(this)

    return image
  }

  commentEl() {
    var commentString = `<li id=comment-${Comment.all.length}> ${this.commentContent}</li>`

    return commentString
  }

}

Comment.all = [];

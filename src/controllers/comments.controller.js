class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
  }


  addCommentFormListener() {
    $.each(this.$addCommentForm, function(index, form) {

      $(form).on("submit", function(e) {
        e.preventDefault()

        var imageId = index
        var commentContent = ($("#comment-description-" + index)).val()
        var comment = new Comment(commentContent, imageId)
        var image = comment.image

        CommentsController.render(comment)
      })

    })
  }
}

CommentsController.render = function(comment) {
  var ul = $("#comments-" + comment.imageId)

  ul.append(comment.commentEl())

  console.log(ul)
}

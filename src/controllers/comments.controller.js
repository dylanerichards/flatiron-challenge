class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
  }

  addCommentFormListener() {

    $.each(this.$addCommentForm, function(index, form) {

      form.addEventListener("click", function() {
        var imageId = index
        var comment = ($("#comment-description-" + index)).val()
        console.log(imageId)
        console.log(comment)
      })

    })


  }
}

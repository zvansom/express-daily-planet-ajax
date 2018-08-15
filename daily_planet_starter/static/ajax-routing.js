$(document).ready(function() {
  $("#edit-form").on("submit", function(e){
    e.preventDefault(); //stops the submit
    var url = $(this).attr("action"); //The form's action value
    var data = $(this).serialize();
    console.log(data);

    $.ajax({
      method: "PUT",
      url: url,
      data: data
    }).done(function(data) {
      window.location = url;
    }).fail(function(err){
      console.log('err', err);
    });
  }); // End put-form

  $("#delete-btn").on("click", function(e) {
    e.preventDefault(); // Stops the click
    var url = $(this).attr("href"); // Get href from delete link button

    $.ajax({
      method: "DELETE",
      url: url
    }).done(function(data){
      window.location = "/articles";
    }).fail(function(err){
      console.log('err', err);
    }); //End AJAX function

  }); //End delete-link
});

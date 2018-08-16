$(document).ready( function() {

  $('#delete-btn').click(function(e) {
    e.preventDefault();
    let articleURL = $(this).attr('href');
    console.log("url", articleURL);

    $.ajax({
      method: "DELETE",
      url: articleURL
    }).done( data => {
      console.log('success', data);
      window.location = "/articles";
    }).fail( err => {
      console.log('Error', err);
    });
  });

  $('#edit-form').submit( function(e) {
    e.preventDefault();
    let articleURL = $(this).attr("action");
    let articleData = $(this).serialize();

    $.ajax({
      method: "PUT",
      url: articleURL,
      data: articleData
    }).done( data => {
      console.log('success!', data);
      window.location = "/articles";
    }).fail( err => {
      console.log("Error:", err);
    });
  });

  // $('#edit-btn').click(function(e) {
  //   e.preventDefault();
  //   let articleURL = $(this).attr('href');
  //   console.log("url", articleURL);
  //
  //   $.ajax({
  //     method: "PUT",
  //     url: articleURL
  //   }).done( data => {
  //     console.log('success', data);
  //     window.location = "/articles";
  //   }).fail( err => {
  //     console.log('Error', err);
  //   });
  // });


});

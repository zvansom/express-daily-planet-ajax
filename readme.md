# Articles with AJAX

Implement the ability to add/remove articles using AJAX and proper RESTful verbs.

## Goals

* use RESTful routing for all of your routes (see [today's notes](https://wdi_sea.gitbooks.io/notes/content/05-express/express-intro/05crudexpress.html))
*  asynchronous edit and remove operations (AJAX / jQuery)

## Starting point

Your articles index page `GET /articles/` should list all of the Daily Planet's articles (included in the starter code).

### New Behavior

* Delete articles on click
	* create a delete button for each article on the articles index page
  * Make an AJAX call to `DELETE /article/:id`
  * That route should take the article's id and delete the appropriate article
  * Ideally, the page should not refresh, but since the article ids will change on delete, have the page refresh. We'll get around this later.
* Edit articles on click
  * create an edit button for each article on the articles index page
  * The edit button should call to `GET /article/:id/edit` and bring up a form to edit the content of the article
  * Once the edits have been made on the edit form, submit the data back to `PUT /article/:id`.
  * Note that after your AJAX call successfully edits the article, you can redirect back to the articles index page.

## Clean it up

Once you get AJAX working go back and start cleaning the app up. Here are some ideas.

* Clean up styling and make it look like a site you'd actually use.
* Add a home page. Look at other sites you like for inspiration. This is the first thing visitors see when they use your app.
* Catch errors - your app cannot crash when live so it needs to "fail gracefully". The following are some examples of URLs your app should be able to handle without totally crashing...
    * [http://localhost:3000/articles/213123](http://localhost:3000/articles/213123)
    * [http://localhost:3000/asfasgra](http://localhost:3000/asfasgra)

## Bonus

* add the delete and edit buttons to the article show page (`GET /articles/:id`)

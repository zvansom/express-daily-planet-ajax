// Load requires
var express = require('express');
var partials = require('express-partials'); // https://github.com/publicclass/express-partials
var bodyParser = require('body-parser');

// Make new express
var app = express();

// Don't freak out, I'm using ejs,
app.set('view engine', 'ejs');

// We're using partials?  (Can't find reference below)
app.use(partials());
// Maybe this is like ejsLayouts?

// Parse things for me
app.use(bodyParser.urlencoded({ extended: false }));

// I'm gonna use my own scripts too.  Oh, and styles...maybe.  Mostly scripts though.
app.use(express.static('static'));

// This looks like my centent.
var articles = [
    { title: 'Bernie! Bernie!', body: '#feelthebern' },
    // No
    // { title: 'Trump for change!', body: 'Make America Great Again' },
    { title: 'Brian Hague founds the Daily Planet', body: 'Wow! Amazing! Such good news!' }
];

// Root
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/articles', function(req, res) {
  res.render('articles/index', { articles });
});

app.get('/articles/new', function(req, res) {
    res.render('articles/new');
});

// Changed reference point to title for seo purposes (and to make referecing them easier)
app.get('/articles/:title', function(req, res) {
  let article = getThisArticle(req.params.title);
  res.render('articles/show', { article: article[0] });
});

app.post('/articles', function(req, res) {
    // Someone hit save.  Hold onto this. (Not persistant)
    articles.push(req.body);
    // Go look at your new article on the list.
    res.redirect('/articles');
});

// Need to send a link to here.
app.get('/about', function(req, res) {
    res.render('about');
});

// I got you a place to edit things now.
app.get('/articles/:title/edit', function(req, res) {
  let article = getThisArticle(req.params.title);
  res.render('articles/edit', { article: article[0] });
});

// Let's put that edited article back into the database
app.put("/articles/:title", (req, res) => {
  editArticle(req.params.title, req.body);

  res.send("Put the thing in the place.");
});

// Get rid of this done
app.delete('/articles/:title', function(req, res) {
  deleteArticle(req.params.title);
  res.send("Got rid of something.  Hope you meant to do that.");

});

// Cool welcome message.  Saved for future use.
app.listen(3000, function() {
    console.log("You're listening to the smooth sounds of port 3000 in the morning");
});


// Need to break these out of index.js eventually
function getThisArticle(title) {
  return articles.filter( article => { return article.title === title });
}

function editArticle(title, articleData) {
  // Get rid of the original unedited article.
  deleteArticle(title);
  // Put the new article at the end of the list.
  articles.push(articleData);
}

function deleteArticle(title) {
  let index = -1;

  for(let i = 0; i < articles.length; i++){
    if(articles[i].title === title){
      index = i;
      break;
    }
  }
  articles.splice(index, 1);
}

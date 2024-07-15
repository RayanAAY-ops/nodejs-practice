const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { MongoError } = require('mongodb');
// express app
const app = express();

// register view engine
app.set("view engine", 'ejs')
// Listening for requests

const uri = "mongodb+srv://deathsoft2956:nqIhyrEoFp2woviG@cluster0nodepractice.uqym1dy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0nodepractice";
// asynchronous task

mongoose.connect(uri)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true})) // to parse PUT request
// mongooese and mongo sandbox routes
// Add an element to the collection 

app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body:'body of the blog'
    });
    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})
// List all elements
app.get("/all-blogs", (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(MongoError)
    })
})

// Find a specific element
app.get("/single-blog", (req, res) => {
    Blog.findById('66956c9b44ea14cbe5e3fbd2')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(MongoError)
    })
})


app.get("/", (req, res) => {
    res.redirect('/blogs')
})

app.get("/about", (req, res) => {
    
    res.sendFile('./views/about.html', {root: __dirname})
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err)
    })
})

// blog routes
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });

// redirects
app.get("/blogs",(req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((err) => {console.log(err)})
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(result => {
            res.render('details', {blog: result, title: 'Blog Details'})
        })
        .catch((err) => {console.log(err)})
})
// redirects
app.get("/about-us", (req, res) => {
    res.redirect('/about')
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
} )


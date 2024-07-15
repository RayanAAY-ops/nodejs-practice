const express = require('express')
const morgan = require('morgan')
// express app
const app = express();

// register view engine
app.set("view engine", 'ejs')
// Listening for requests
app.listen(3000);

// Middleware
/*app.use((req, res, next) => {
    console.log("new request made")
    console.log(req.hostname)
    next();
})

app.use((req, res, next) => {
    console.log("in the next middleware")
    next();
})
*/
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.render('index', {title: 'express variable'})
})

app.get("/about", (req, res) => {
    
    res.sendFile('./views/about.html', {root: __dirname})
})

// redirects
app.get("/about-us", (req, res) => {
    res.redirect('/about')
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
} )
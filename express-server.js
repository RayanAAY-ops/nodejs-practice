const express = require('express')

// express app
const app = express();

// Listening for requests
app.listen(3000);

app.get("/", (req, res) => {

    res.sendFile('./views/home.html', {root: __dirname})
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
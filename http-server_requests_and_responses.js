const http = require('http')
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set Header content-type
    res.setHeader('Content-Type', 'text/plain')
    
    let path = './views/';

    switch(req.url) {
        case '/':
            path+='index.html'
            res.statusCode = 200
            break;
        case '/about':
            path+='about.html'
            res.statusCode = 200

            break;
            case '/about-me':
                res.statusCode = 301
                res.setHeader('Location', '/about')
                break;
        default:
            path +='404.html'
            res.statusCode = 404
            break;
    }
    console.log("users visits", path)
    // Send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.write(data);
        }
        res.end();

    })
});

server.listen(3000, 'localhost', ()=> {
    console.log("listening on port 3000")
})
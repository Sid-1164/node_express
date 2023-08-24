const http = require('http')

const server = http.createServer((req , res) => {
    // console.log(req)

    if(req.url === '/'){
        res.write('Welcome to home')
        res.end()
    }
    
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }

    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for</p>
        <a href = "/"> back home </a>
    `)

    // res.write('Welcome to root')
    // res.end()
})

server.listen(5500)
console.log('server is listing');
const http = require('http')
const url = require('url')
const fs = require('fs')
const addmod = require('./addmod')

http.createServer((req, res) => {
  const q = url.parse(req.url, true)
  const filename = '.' + q.pathname
  if (q.pathname === '/add.js') {
    addmod.add2(req, res, q.query)
  } else {
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/html' })
        return res.end('404 Not found')
      }
      res.writeHead(200)
      res.write(data)
      return res.end()
    })
  }
}).listen(8080)

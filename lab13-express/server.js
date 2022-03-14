const express = require('express')
const app = express()
const path = require('path')
const operation = require('./operation')

const port = 8080
app.use(express.urlencoded({ extended: false }))

// Set public folder as source for all static content
// e.g. scripts, images, stylesheets etc.
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public', 'home.html'))
})

app.post('/operate', (req, res, next) => {
  const num = operation.operate(req)
  //   res.redirect(200, `/result?num=${num}`)
  const homePageContent = `
        <!doctype html>
        <html lang="en">
        <head>
            <title>Result</title>
        </head>
        <body>
            <p class="fw-bold">The answer is ${num}</p>
            <a href="/">Another calculation</a>
        </body>
        </html>
    `
  res.send(homePageContent)
})

// app.get('/result', (req, res, next) => {
//   res.send(`

//     `)
//   res.end()
// })

// Put the Error 404 middleware last
app.use((req, res, next) => {
  console.log('Responding by redirecting to the 404 Error page')
  res.status(404).redirect(303, '/static/html/404.html')
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(port, () => {
  console.log(`server running on ${port}`)
})

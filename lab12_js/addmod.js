exports.add = function (req, res, vals) {
  const sum = parseInt(vals.first) + parseInt(vals.second)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<!DOCTYPE html>')
  res.write('<html>')
  res.write('<head><meta charset="utf-8"/>')
  res.write('<title>Calculator Web Site</title>')
  res.write('</head>')
  res.write('<body>')
  res.write('<p>The sum is: ')
  res.write(String(sum))
  res.write('</p>')
  res.write('</body>')
  res.write('</html>')
  return res.end()
}

exports.add2 = function (req, res, vals) {
  const sum = parseInt(vals.first) + parseInt(vals.second)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(`<!DOCTYPE html>
      <html>
       <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
       </head>
       <body>
         <p>The sum is:  ${String(sum)}</p>
       </body>
      </html> `)
	  return res.end()
}

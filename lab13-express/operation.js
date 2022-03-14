exports.operate = (req) => {
  let num = 0
  switch (req.body.operation) {
    case 'add':
      num = parseInt(req.body.first) + parseInt(req.body.second)
      break

    case 'substract':
      num = parseInt(req.body.first) - parseInt(req.body.second)
      break

    case 'multiply':
      num = parseInt(req.body.first) * parseInt(req.body.second)
      break

    case 'divide':
      num = parseInt(req.body.first) / parseInt(req.body.second)
      break

    default:
      num = 0
  }
  return num
}

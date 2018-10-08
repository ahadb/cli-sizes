const size = require('../index')

console.log(size.cliSizes())
// => columns: 140, rows: 37 OR 0 if not supported

console.log(size.cliSizes({getWindowSize: true}))
// => fallback

size.resize()
// => using event to dyamically get size based upon resizing terminal
// => columns: 140, rows: 37 OR 0 if not supported

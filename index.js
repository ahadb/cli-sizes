/**
 * Created by Ahad Bokhari on 10/04/18.
 */
/**
 * returns path info in an easy to use object format
 * @param {str} string
 * @return {{defaultWidth: number, defaultHeight: number, output: *}}
 */

function setOptions(options) {
  let defaults = {
    defaultWidth: 0,
    defaultHeight: 0,
    columns: process.stdout.columns,
    rows: process.stdout.rows,
    getWindowSize: process.stdout
  }

  if (!options) {
    return defaults
  } else {
    Object.keys(defaults).forEach(function (key) {
      if (!options[key]) {
        options[key] = defaults[key]
      }
    })

    return options
  }
}

function cliSizes(options) {
  let opts = setOptions(options)

  if (typeof module !== 'undefined' && module.exports) {
    if (!options) {
      return {
        columns: opts.columns,
        rows: opts.rows
      }
    } else {
      return {
        windowSize: process.stdout.getWindowSize() || opts.defaultWidth && opts.output.defaultHeight
      }
    }
  }
}

function resize() {
// intentionally adjust to left for console alignment
  console.log(`  
columns: ${process.stdout.columns}
rows: ${process.stdout.rows}`
  )
  process.stdout.on('resize', function() {
    console.log(`
columns: ${process.stdout.columns}
rows: ${process.stdout.rows}`
    )
  })
  setInterval(function() {}, 1000)
}

module.exports = {
  cliSizes: cliSizes,
  resize: resize
}

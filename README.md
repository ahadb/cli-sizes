## CLI SIZES

A node package to find the terminal size with a simple fallback option. Find the size of your terminal quickly

### Installation 

`npm install --save cli-sizes`

### Usage

There is an options paramater that can be configured where possible - only one option for the time being can be passed

#### Examples

```javascript
const size = require('cli-sizes')

console.log(size.cliSizes())
```

```javascript
const size = require('cli-sizes')

// options
console.log(size.cliSizes({
getWindowSize: true
}))
```

```javascript
// resize event
const size = require('cli-sizes')

console.log(size.resize())
```

#### API

* cliSizes < function > Returns cols and rows with terminal size values
* getWindowSize < object > Option used as a fallback: `process.stdout`
* resize < function > Resize the terminal but retain dynamic values of size 

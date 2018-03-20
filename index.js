const fs = require('fs')

const gargoyle = fs.readFileSync('gargoyle.ascii')

module.exports = () => console.log(gargoyle.toString())

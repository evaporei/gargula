const fs = require('fs')
const path = require('path')

const gargoyle = fs.readFileSync(path.join(__dirname, 'gargoyle.ascii'), 'utf8')

module.exports = () => console.log(gargoyle.toString())

import path from 'node:path'


console.log(path.dirname('D:/node/firstapp/pathapi.js'))
console.log(path.basename('D:/node/firstapp/pathapi.js'))
console.log(path.extname('D:/node/firstapp/pathapi.js'))
console.log(path.isAbsolute('D:/node/firstapp/pathapi.js'))
console.log(path.resolve('./pathapi.js'))
console.log(path.parse('D:/node/firstapp/pathapi.js'))
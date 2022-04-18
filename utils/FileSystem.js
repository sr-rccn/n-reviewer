const fs = require('fs');

const answerFileReader = (path) => {
    var array = fs.readFileSync(path).toString().split("\n");
    return array.map((data) => parseInt(data))

}


exports.answerFileReader = answerFileReader
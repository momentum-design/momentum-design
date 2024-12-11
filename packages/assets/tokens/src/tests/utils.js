const fs = require('fs');

// Function to count lines in a file
const countLines = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return reject(err);
    }
    const lines = data.split('\n').length;
    return resolve(lines);
  });
});

module.exports = {
  countLines,
};

const args = process.argv.slice(2);
const fs = require("fs");
const rq = require("request");

const URI = args[0];
const filePath = args[1];

rq(URI, (error, response, body) => {
  if (error) {
    console.log("ERROR: ", error);
  }
  if (response.statusCode ===  200) {
    writeFile(body);
  }
});

const writeFile = (response) => {
  fs.writeFile(filePath, response, error => {
    if (error) {
      console.log("ERROR writing file: ", error);
      return;
    }
    //file written successfully
    console.log(`Downloaded and saved ${response.length} bytes to ${filePath}`);
  });
};
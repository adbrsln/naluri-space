var express = require('express');
var router = express.Router();
var http = require('http');

const sunRadius = 695700

/* GET home page. */
router.get('/', function(req, response, next) {
  http.get('http://localhost:3000/api/pi', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      response.render('index', { title: 'Naluri Space Project',pi: parsedData.current_value , circumference : calculateCircumference(sunRadius,parsedData.current_value) })
    } catch (e) {
      console.error(e.message);
    }
  });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
});

function calculateCircumference(radius, pi) {
  return 2 * pi * radius
}

module.exports = router;

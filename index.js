/* Initializing file for API
 *
 * @Benjamin Sigidi
*/

console.log('@binyaman has started........');


// Dependancies
const http = require('http');
const url = require('url');


const server = http.createServer(function(req,res) {

  // GET URL
  const parsedUrl = url.parse(req.url, true);

  // PATH
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();

  // SEND response
  res.end('Hello Binyamin\n');

  // Log the request
  console.log(`Request received on path: ${trimmedPath} with method: ${method}`);

});


server.listen(3000,function(){
  console.log('Listening on PORT 3000');
});

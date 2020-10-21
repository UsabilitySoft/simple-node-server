
const http = require('http');
import { requestMultipleUrls } from 'request-multiple-urls';

const urls = [ 
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json', 
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json', 
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json' ];
  
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  
  requestMultipleUrls(urls).then(urlContent => { 
    response.write(JSON.stringify(urlContent))
    response.end()
  });  
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
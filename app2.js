const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th>Location</th><th>Hours to be spent</th><th>Expenses</th></tr><tr><td>Mysore</td><td>10</td><td>$400</td></tr><tr><td>Kerala</td><td>8</td><td>$500</td></tr><tr><td>Goa</td><td>9</td><td>$800</td></tr><tr><td>Hampi</td><td>12</td><td>$200</td></tr>')
      res.write('</table>')    
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
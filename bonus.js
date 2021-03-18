const http =require("http")


const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001




let Subjects = ["Love all, trust a few, do wrong to none.","You call it madness, but I call it love.",
"We can only learn to love by loving.","A life lived in love will never be dull.",
"All you need is love.","True love stories never have endings."]

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type','text/plain')
    res.write(Subjects[Math.floor(Math.random()*Subjects.length)])
    res.end()
})
server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
  })
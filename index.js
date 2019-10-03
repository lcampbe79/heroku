const express = require('express');
const server = express();
server.use(express.json());
const shouts = [];

server.get('/', (req, res) => {
    res.status(200).json({hello: "Node 22"})
});

server.get('/shouts', (req, res) => {
    res.status(200).json(shouts)
});

server.post('/shouts', (req, res) => {
    shouts.push(req.body)
    res.status(201).json(shouts)
})

//for heroku needs dynamic port
//we can read port value added by heroku to the environment
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\napi running on ${port}\n`))
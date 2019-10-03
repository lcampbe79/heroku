const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.status(200).json({hello: "Node 22"})
});

//for heroku needs dynamic port
//we can read port value added by heroku to the environment
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\napi running on ${port}\n`))
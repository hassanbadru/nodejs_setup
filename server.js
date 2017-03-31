import config from './config';
import express from 'express';
//import fs from 'fs';
import apiRouter from './api';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express\n');
});

server.use(express.static('public'));
server.use('/api', apiRouter);

/*
server.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
          res.send(data.toString());
    });
});*/

server.listen(config.port, () => {
      console.info('Express listening on port', config.port);
});

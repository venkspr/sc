import express from 'express';
import config from './config';
import bodyParser from 'body-parser';
import morgan from 'morgan';
require('babel-register');
const app = express();
app.use(morgan('common'));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(config.port, config.host, () => {
  console.info(`Running on ${config.host}:${config.port}...`);
});

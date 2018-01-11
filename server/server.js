require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); 
const port = process.env.PORT;
const API_KEY = process.env.API_KEY;
const TOKEN = process.env.TOKEN;

app.use(bodyParser.json());

app.use(cors()); 

app.post(`/gettoken/${API_KEY}`, (req, res) => {
  res.status(200).send({ 'token' : TOKEN });
});

app.get(`/getroute/:token`, (req, res) => {
  res.status(200).send({
		status: 'success',
		path: [
			["22.338663", "114.175698"],
			["22.305397", "114.165997"],
			["22.300789", "114.183034"]
		],
		total_distance: 10000,
		total_time: 1300
	});
});

app.listen(port, () => {
  console.log(`Listening on the port ${port}`); 
});

module.exports = {app};
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');
const app = express();
const { port } = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.json({ info: 'How old is your Nancy Drew book?'});
});

app.get('/stories', db.getStories);
app.get('/stories/:story_number', db.getStoryByNumber);
//app.post('/users', db.createUser);
//app.put('/users/:id', db.updateUser);
//app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
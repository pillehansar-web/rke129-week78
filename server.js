const express = require('express');
const path = require('node:path');
const profile = require('./profile.json');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/profile.js', (request, response) => {
    response.sendFile(path.join(__dirname, 'profile.js'));
});

app.get('/', (request, response) => {
    response.render('index', { profile });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`CV app listening on port ${port}`);
});

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const twilio = requrie('twilio');
const PORT = process.env.PORT || 3000;

require('dotenv').load();

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);



const app = express();
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Brandon',
            lastName: 'Benoit'
        }
    }
    res.render('index', data);
});

app.post('/index', (req, res) => {
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.CELL_PHONE_NUMBER,
        body: req.body.firstName + ' ' + req.body.lastName + ' has viewed your portfolio, and wants to talk to you. Please contact them at ' + req.body.email + '.'
    })
    .then((message) => console.log(message.sid))
    // .then(res.end())
});

app.listen(PORT, () => {
    console.log('listening at http://localhost:3000');
});
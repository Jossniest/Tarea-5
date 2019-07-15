const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.set('port', process.env.PORT || 8080);
app.use(morgan('dev'));
app.use(bodyParser.json());

require('./route/contactos')(app);

app.listen(app.get('port'), () => {
    console.log('server en puerto 8080');
});


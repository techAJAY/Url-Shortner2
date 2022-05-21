const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes.js');
const mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://gtgaurav:Wp2gKNWXbHDifb5n@cluster0.9p9yl.mongodb.net/UrlShorten84-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
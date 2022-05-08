const express = require("express")
const bodyParser = require("body-parser")
const route = require("./router/route")
const mongoose = require("mongoose");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://pushpa12345678:cgcJnwdd7jxZbIMJ@cluster0.s65iq.mongodb.net/project2',
{
useNewurlParser: true
})

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

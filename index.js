const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const url = "mongodb+srv://fly_flow4:pass0001@cluster1.tv17iub.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { }).then(() => console.log('MongoDB Connect....')).catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(port));
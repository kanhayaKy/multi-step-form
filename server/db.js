const mongoose = require('mongoose');

var URL = "mongodb://localhost:27017/usersDb";
mongoose.connect(URL ,{ useNewUrlParser: true });
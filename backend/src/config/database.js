const mongoose = require('mongoose');
const server = require('./server');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

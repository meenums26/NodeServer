const mongoose = require('mongoose');

const basicSchema = new mongoose.Schema({
    name : String,
    description : String,
    parent : String
});
const basicModel = mongoose.model('nodes',basicSchema);
module.exports = basicModel;
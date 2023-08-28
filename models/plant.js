const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    commonName: '',
    sunlight: '',
    watering: '',
    description: '',
    careLevel: '',
    growingTips: ''
});

module.exports = mongoose.model('plant', plantSchema);
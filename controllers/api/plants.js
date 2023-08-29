const Plant = require('../../models/plant');

module.exports = {
    create,
    new: newPlant,
    show,
    index
};

async function create(req, res) {
    console.log('recieved data', req.body);
    try {
        const newPlant = await Plant.create(req.body);
        res.json(newPlant);
    } catch (error) {
        res.status(400).json(error);
    }
}

function newPlant(req, res) {
    res.render('/plants', { title: 'Lettuce turnip the beet!', errorMsg: '' });
}

async function show(req, res) {
    try {
        const plants = await Plant.find()

        res.json(plants);
    } catch (error) {
        res.status(500).json({ error: "Sorry! Can't fetch plants" });
    }
}

async function index(req, res) {
    const plants = await Plant.find({}).sort('commonName');
    res.json(plants);
}

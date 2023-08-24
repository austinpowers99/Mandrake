import Plant from '../../models/plant';
const Plant = require('../../models/plant');

module.exports = {
    create,
    new: newRecipe,
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

function newRecipe(req, res) {
    res.render('/plants', { title: 'Lettuce turnip the beet!', errorMsg: '' });
}
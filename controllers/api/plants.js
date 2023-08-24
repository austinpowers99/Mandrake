import Plant from '../../models/plant';
const Plant = require('../../models/plant');

module.exports = {
    create,
    new: newPlant,
    delete: deleteNewPlant
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

async function deleteNewPlant(req, res) {
    try {
        await Plant.deleteOne({_id: req.params.id});
        res.redirect('/plants');
    } catch (err) {
        console.log(err)
    }
}
const Trainer = require('../models/trainer');

const getTrainers = async (req, res) => {
    try {
        const trainers = await Trainer.find()
        .populate('pokemon')
        .populate('badges')
        res.status(200).json(trainers);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getSingleTrainer = async (req, res) => {
    try {
        const trainers = await Trainer.find({ _id: req.params.id }).populate('pokemon');
        res.status(200).json(trainers);
    } catch (err) {
        res.status(500).json(err);
    }
}

const createTrainer = async (req, res) => {
    try {
        const result = await Trainer.create(req.body);
        res.status(200).json({message: 'Success', trainer: result})
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateTrainer = async (req, res) => {
    try {
        const result = await Trainer.findOneAndUpdate(
            {_id: req.params.id},
            {$set: { firstName: req.body.firstName, lastName: req.body.lastName}},
            {new: true, runValidators: true}
        )
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateTrainerBadges = async (req, res) => {
    try {
        const result = await Trainer.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: { badges: req.body.badge_id}},
            {new: true, runValidators: true}
        )
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteTrainer = async (req, res) => {
    try {
        const result = await Trainer.findOneAndDelete({_id: req.params.id});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getTrainers,
    getSingleTrainer,
    createTrainer,
    deleteTrainer,
    updateTrainerBadges,
    updateTrainer
}
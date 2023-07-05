const Pokemon = require('../models/pokemon');

const getPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.status(200).json(pokemons);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getSinglePokemon = async (req, res) => {
    try {
        const pokemons = await Pokemon.find({ _id: req.params.id })
        res.status(200).json(pokemons);
    } catch (err) {
        res.status(500).json(err);
    }
}

const createPokemon = async (req, res) => {
    try {
        const result = await Pokemon.create(req.body);
        res.status(200).json({message: 'Success', pokemon: result})
    } catch (err) {
        res.status(500).json(err);
    }
}

const updatePokemon = async (req, res) => {
    try {
        const result = await Pokemon.findOneAndUpdate(
            {_id: req.params.id},
            {$set: { name: req.body.name, type: req.body.type}},
            {new: true, runValidators: true}
        )
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deletePokemon = async (req, res) => {
    try {
        const result = await Pokemon.findOneAndDelete({_id: req.params.id});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getPokemons,
    getSinglePokemon,
    createPokemon,
    deletePokemon,
    updatePokemon
}
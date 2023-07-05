const router = require('express').Router();

const {
    getPokemons,
    getSinglePokemon,
    createPokemon,
    deletePokemon,
    updatePokemon
}= require('../../controller/pokemonController');

router.route('/').get(getPokemons);
router.route('/:id').get(getSinglePokemon);
router.route('/').post(createPokemon);
router.route('/id').put(updatePokemon);
router.route('/id').delete(deletePokemon);

module.exports = router;



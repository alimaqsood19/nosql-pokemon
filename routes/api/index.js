const router = require('express').Router();
const pokemonRoutes = require('./pokemonRoutes');
const trainerRoutes = require('./trainerRoutes');

router.use('/pokemon', pokemonRoutes);
router.use('/trainer', trainerRoutes);

module.exports = router;

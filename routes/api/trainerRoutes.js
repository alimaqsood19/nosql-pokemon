const router = require('express').Router();

const {
    getTrainers,
    getSingleTrainer,
    createTrainer,
    deleteTrainer,
    updateTrainerBadges,
    updateTrainer
} = require('../../controller/trainerController');

router.route('/').get(getTrainers);
router.route('/:id').get(getSingleTrainer);
router.route('/').post(createTrainer);
router.route('/').put(updateTrainer);
router.route('/badge/:id').put(updateTrainerBadges);
router.route('/:id').delete(deleteTrainer);

module.exports = router;



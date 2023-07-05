const { Schema, model } = require('mongoose');
const Badges = require('./badges');

const trainerSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true,
        },
        badges: [
            {
                type: Schema.Types.ObjectId,
                ref: 'badges'
            }
        ],
        pokemon: {
            type: Schema.Types.ObjectId,
            ref: 'pokemon'
        }
    }
)

const Trainer = model('trainer', trainerSchema);

module.exports = Trainer;
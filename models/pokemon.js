const { Schema, model } = require('mongoose');

const abilitySchema = new Schema(
    {
        name: String,
        usagePoints: {
            type: Number,
            min: 1,
            max: 4
        },
    }
)

const pokemonSchema = new Schema(
    {
        name: String,
        type: String,
        abilities: [abilitySchema],
    },
    {
        toJSON: {
            virtuals: true
        }
    },
)

pokemonSchema.virtual('battleCry').get(function() {
    return `${this.name.substring(0,4)}!!`
});

const Pokemon = model('pokemon', pokemonSchema);

module.exports = Pokemon;
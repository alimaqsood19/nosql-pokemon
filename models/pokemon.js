const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema(
    {
        name: String,
        type: String
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

pokemonSchema.virtual('battleCry').get(function() {
    return `${this.name.substring(0,4)}!!`
});

const Pokemon = model('pokemon', pokemonSchema);

module.exports = Pokemon;
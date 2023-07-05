const { Schema, model } = require('mongoose');

const badgeSchema = new Schema(
    {
        name: String,
        type: String
    }
)

const Badges = model('badges', badgeSchema);

module.exports = Badges;
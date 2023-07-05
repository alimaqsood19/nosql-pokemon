const connection = require('../config/connection');
const Badges = require('../models/badges');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  const badges = [
    { name: 'Boulder Badge', type: 'Rock' },
    { name: 'Cascade Badge', type: 'Water' },
    { name: 'Thunder Badge', type: 'Electric' },
  ];

  Badges.insertMany(badges)
  .then((result) => {
    console.log('Badges inserted successfully:', result);
  })
  .catch((error) => {
    console.error('Error inserting badges:', error);
  });

  const result = await Badges.collection.insertMany(badges);
  console.log(result);
  process.exit(0);
});

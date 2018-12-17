require('dotenv').config();
const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const jokes = [
  { title: 'What to you get when you cross the Atlantic with the Titanic? About half way', source:'search' },
  { title: 'What did one wall say to the other wall? Lets meet at the corner', source:'search' },
  { title: 'Why did Cleopatra fall off the swing? Because she is dead', source: 'custom' }
];

const ratings = [
  { score: 1 },
  { score: 3 },
  { score: 4 }
];

client.query(`
  INSERT INTO profiles (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['jei', bcrypt.hashSync('jeijei', 8)]
)
  .then(result => {
    const profile = result.rows[0];


    return Promise.all(
      jokes.map(jokes => {
        return client.query(`
        INSERT INTO goals (title, profiles_id)
        VALUES ($1, $2)
      `,
        [jokes.title, profile.id]);
      })
    );
  })
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      ratings.map(rating => {
        return client.query(`
        INSERT INTO ratings (score, jokes_id, profiles_id)
        VALUES ($1, $2, $3)
      `,
        [rating.score, jokes.id, profile.id]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
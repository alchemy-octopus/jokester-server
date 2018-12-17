require('dotenv').config();
const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const jokes = [
  { title: 'What to you get when you cross the Atlantic with the Titanic? About half way' },
  { title: 'What did one wall say to the other wall? Lets meet at the corner' },
  { title: 'Why did Cleopatra fall off the swing? Because she is dead' }
];

const ratings = [
  { score: 8, count: 2 },
  { score: 4, count: 1 },
  { score: 9, count: 3 }
];

client.query(`
  INSERT INTO profiles (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['jei', bcrypt.hashSync('jeijei', 8)]
)
  .then(result => {

    return Promise.all(
      jokes.map(jokes => {
        return client.query(`
        INSERT INTO goals (title, profiles_id)
        VALUES ($1, $2)
      `,
        [jokes.title, profiles.id]);
      })
    );
  })
  .then(result => {

    return Promise.all(
      ratings.map(ratings => {
        return client.query(`
        INSERT INTO ratings (score, count, jokes_id)
        VALUES ($1, $2, $3)
      `,
        [ratings.score, ratings.count, profiles.id]);
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
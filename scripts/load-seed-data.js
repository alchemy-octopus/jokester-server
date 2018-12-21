require('dotenv').config();
const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const jokes = [
  { title: 'What to you get when you cross the Atlantic with the Titanic? About half way', source:'found with search' },
  { title: 'What did one wall say to the other wall? Lets meet at the corner', source:'found with search' },
  { title: 'Why did Cleopatra fall off the swing? Because she is dead', source: 'your creation' }
];

const ratings = [
  { score: 4 },
  { score: 3 },
  { score: 1 }
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
      jokes.map(joke => {
        return client.query(`
        INSERT INTO jokes (title, source, profile_id)
        VALUES ($1, $2, $3)
        RETURNING *
      `,
        [joke.title, joke.source, profile.id]);
      })
    );
  })
  .then(result => {
    // console.log('result is ', result[0].rows[0]);
    const joke = result[0].rows[0];

    return Promise.all(
      ratings.map(rating => {
        return client.query(`
        INSERT INTO ratings (score, joke_id, profile_id)
        VALUES ($1, $2, $3)
      `,
        [rating.score, joke.id, joke.profile_id]);
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
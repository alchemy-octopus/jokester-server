const router = require('express').Router();
const client = require('../db-client');
const bcrypt = require('bcryptjs');
const jwt = require('../jwt');

const APP_SECRET = 'jeijei';

function getProfileWithToken(profile) {
  return {
    id: profile.id,
    username: profile.username,
    token: jwt.sign({ id: profile.id }, APP_SECRET)
  };
}

router
  .post('/signup', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    
    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }
    client.query(`
      SELECT id
      FROM profiles
      WHERE username = $1;
    `,
    [username])  
      .then(result => {
        if(result.rows.length > 0) {
          res.status(400).json({ error: 'username already exists' });
          return;
        }
        client.query(`
          INSERT into profiles (username, hash)
          VALUES ($1, $2)
          RETURNING id, username;
        `,
        [username, bcrypt.hashSync(password, 8)]
        )
          .then(result => {
            const profile = result.rows[0];
            res.json(getProfileWithToken(profile));
          });
      });
  })
  
  .post('/signin', (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }
    client.query(`
      SELECT id, username, hash 
      FROM profiles
      WHERE username = $1;
    `,
    [username]
    )
      .then(result => {
        const profile = result.rows[0];
      
        if(!profile || !bcrypt.compareSync(password, profile.hash)) {
          res.status(400).json({ error: 'username or password incorrect' });
          return;
        }

        res.json(getProfileWithToken(profile));
      });
  });

module.exports = router;
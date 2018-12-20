const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router 
  .get('/', (req, res) => {
    client.query(`
      SELECT
        id, 
        score, 
        joke_id 
        FROM ratings
        WHERE profile_id = $1;
      `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO ratings (score, joke_id, profile_id)
      VALUES($1, $2, $3)
      RETURNING *;
    `,
    [body.rating, body.jokeId, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;
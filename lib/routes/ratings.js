const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router 
  .get('/:id', (req, res) => {
    console.log('joke id is ', req.jokeId);
    client.query(`
      SELECT 
        FLOOR(AVG(score)) as "rating"
        FROM ratings
        WHERE joke_id = $1;
      `,
    [req.params.id])
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
const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router 
  .get('/:id', (req, res) => {
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
  // Ideally this should enforce one rating per joke per user
  .post('/', (req, res) => {
    const body = req.body;
    
    // something like:

    const values = [body.rating, body.jokeId, req.userId];

    client.query(`
      UPDATE ratings
      SET score = $1,
          joke_id = $2
      WHERE profile_id = $3
      RETURNING *;
    `, values)
      .then(result => {
        // it worked! all done :)
        if(result.rowCount === 1) return result;

        // doesn't exist, do an insert...
        return client.query(`
          INSERT INTO ratings (score, joke_id, profile_id)
          VALUES($1, $2, $3)
          RETURNING *;
        `, values);
      })
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;
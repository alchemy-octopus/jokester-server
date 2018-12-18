const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
        SELECT *
        id,
        title
        FROM jokes
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
      INSERT INTO jokes (title, source, profile_id)
      VALUES($1, $2, $3)
      RETURNING *;
    `,
    [body.title, body.source, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  });
      
      
module.exports = router;


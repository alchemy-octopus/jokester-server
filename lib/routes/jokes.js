const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    console.log('req', req.userId);
    client.query(`
        SELECT 
        id,
        title,
        source
        FROM jokes
        WHERE profile_id = $1;
      `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/:rateId', (req, res) => {
    client.query(`
        SELECT 
        id,
        title
        FROM jokes
        WHERE profile_id = $1;
      `,
    [req.params.rateId])
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
  })

  .delete('/:id', (req, res) => {
    client.query(`
      DELETE FROM jokes WHERE id = $1;
  `,
    [req.params.id])
      .then(result => {
        res.json({ removed:result.rowCount === 1 });
      });
  })
  .put('/:id', (req, res) =>{
    const body = req.body;
    console.log('body', body);
    client.query(`
    UPDATE jokes
    SET
      title = $1,
      source = $2
    WHERE id = $3
    AND profile_id = $4
    RETURNING *;
    `,
    [body.title, body.source, req.params.id, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  });
     
module.exports = router;
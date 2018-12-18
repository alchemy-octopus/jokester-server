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
  });
      
      
module.exports = router;


const router = require('express').Router();
const request = require('superagent');
const RESTAURANT_API = 'http://api.civicapps.org';

router
  .get('/', (req, res) => {


    //make the request to the api (async)
    request.get(`${RESTAURANT_API}/restaurant-inspections/`)
      //then send the response via res.json
      .then(response => {
        res.json(response.body);
      });
  });

module.exports = router;


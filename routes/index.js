const express = require('express');
const router  = express.Router();

//renders the form we have discussed in the classroom
router.get('/', (req, res, next) => {
  res.render('index');
});

//receives the post payload coming from the form
router.post('/createUserProfile', (req, res, next) => {
  //here goes any algorithm you may like
  let formData = req.body
  //remember to add a response to the front-end
  res.status(201).json({response: `the name sent from the form was ${formData.n}`})
});

module.exports = router;

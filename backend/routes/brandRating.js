const express = require('express');

const brandRatingController = require('../controllers/brandRating');

const router = express.Router();

router.get('/', brandRatingController.getAllBrandsRatings);

module.exports = router;
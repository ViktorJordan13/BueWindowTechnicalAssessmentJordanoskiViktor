const express = require('express');

const brandRatingController = require('../controllers/brandRating');

const router = express.Router();

router.get('/', brandRatingController.getAllBrandsRatings);

router.post('/', brandRatingController.postBrandRatings);

router.put('/', brandRatingController.putBrandRatings);

router.delete('/', brandRatingController.deleteBrandRatings);

module.exports = router;
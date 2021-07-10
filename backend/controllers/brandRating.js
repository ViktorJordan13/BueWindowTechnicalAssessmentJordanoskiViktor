const BrandRating = require('../models/brandRating');

exports.getAllBrandsRatings = (req, res, next) => {

    res.send(BrandRating.fetchAll());
}
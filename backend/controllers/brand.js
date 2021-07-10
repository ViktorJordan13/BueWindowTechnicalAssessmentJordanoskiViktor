const Brand = require('../models/brand');

exports.getAllBrands = (req, res, next) => {

    res.send(Brand.fetchAll());
}
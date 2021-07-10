const BrandRating = require('../models/brandRating');

exports.getAllBrandsRatings = async (req, res, next) => {

    try{
        const [allBrandsRatings] = await BrandRating.fetchAll();
        res.status(200).json(allBrandsRatings);
        await BrandRating.fetchAll();

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}

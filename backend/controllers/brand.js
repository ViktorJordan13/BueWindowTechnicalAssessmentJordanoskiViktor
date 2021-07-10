const Brand = require('../models/brand');

exports.getAllBrands =  async (req, res, next) => {

    try{
        const [allBrands] = await Brand.fetchAll();
        res.status(200).json(allBrands);
        await Brand.fetchAll();

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}

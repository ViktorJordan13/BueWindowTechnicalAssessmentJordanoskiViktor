const db = require('../util/database')

module.exports = class BrandRating{

    constructor(name, country, rating ){
        this.name = name;
        this.country = country;
        this.rating = rating;
              
    }

    static fetchAll(){

        return db.execute('SELECT * FROM brandsratings');
        

    }
};
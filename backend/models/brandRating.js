module.exports = class BrandRating{

    constructor(id,  rating, listSize, listCountry, listFallback, countryRating ){
        this.id = id;
        this.rating = rating;
        this.listSize = listSize;
        this.listCountry = listCountry;
        this.listFallback = listFallback;
        this.countryRating = countryRating;
        
    }

    static fetchAll(){

        return [

            {
                id: 1,
                rating: 90, 
                listSize: 10, 
                listCountry: 5, 
                listFallback: 0, 
                countryRating: 100
            },
        
            {
                id: 2,
                rating: 93, 
                listSize: 9, 
                listCountry: 4, 
                listFallback: 1, 
                countryRating: 95
            },
        ];

    }
};
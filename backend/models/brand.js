module.exports = class Brand{

    constructor(id,  name, description){
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static fetchAll(){

        return [

            {
                id: 1,
                name: 'Adidas',
                description: 'Sports brand'
            },
        
            {
                id: 2,
                name: 'Zara',
                description: 'Fashion brand'
            },
        ];

    }
};
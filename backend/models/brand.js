const db = require('../util/database')

module.exports = class Brand{

    constructor(id,  name, description){
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static fetchAll(){

        return db.execute('SELECT * FROM brands');

    }
};
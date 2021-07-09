const express = require('express');

const app = express();

const ports = process.env.PORT || 3000;

const brands = [

    {
        id: 1,
        name: 'Adidas',
        description: 'Sports brand'
    },

    {
        id: 2,
        name: 'Zara',
        description: 'Fashion brand'
    }
]

app.get('/', (req, res) => {
    res.send(brands);
});

app.listen(ports, () => console.log(`listening on port ${ports}`));
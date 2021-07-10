const express = require('express');

const brandRoutes = require('./routes/brand'); 

const brandRatingRoutes = require('./routes/brandRating'); 

const app = express();

const ports = process.env.PORT || 3000;

app.use('/brands', brandRoutes);

app.use('/brandsRatings', brandRatingRoutes);

app.listen(ports, () => console.log(`listening on port ${ports}`));
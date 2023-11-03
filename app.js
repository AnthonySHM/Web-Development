
const express = require('express');
const app = express();
const productsRoute = require('./routes/productsRoute');


app.use('/api', productsRoute);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const mongoose = require('./db');
const pizzaRoute = require('./routes/pizzaRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require("./routes/ordersRoute");

require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/pizzas/', pizzaRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);

app.get('/', (req, res) => {
    res.send('Server is working');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

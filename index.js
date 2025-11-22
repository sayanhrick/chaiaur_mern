const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.status(200).send('Server is up')
);

//Server port
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});


app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
});
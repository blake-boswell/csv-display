const express = require('express')
const app = express()
const fs = require('fs')
const port = 3013

express.static('static');
app.get('/', (req, res) => res.sendFile('./prod.html', {root: __dirname }));
app.get('/file/:id', (req, res) => { 
    res.sendFile(`${req.params.id}`, {root: __dirname });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
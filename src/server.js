import {list} from './todos.json';



const express = require('express');
const list = express();
app.get('/:list', (req, res) => {
    res.status(201);
    res.send({list});
});

app.get('/:list/completed', (req, res) => {
    res.status(201);
    res.send({list});
})

app.get('/:list/active', (req, res) => {
    res.status(201);
    res.send({list});
})


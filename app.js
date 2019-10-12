const express = require('express')
const pokemonsRouter = require('./pokemons/router')
const app = express()

app.use(express.json()) //for express use json format
app.use(pokemonsRouter)

app.get('/', (req, res) => res.send({ message: 'Hello world' }))

module.exports = app
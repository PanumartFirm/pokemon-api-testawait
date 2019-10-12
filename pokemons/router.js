
const express = require('express')
const router = express.Router()
const pokemon = require('./pokemon')


function isSufficientParam(v) {
    return v !== undefined && v !== '' && v !== null
}


router.get('/pokemons', (req, res) =>{

    pokemon.getPokemons().then((result) =>{
        res.send(result)
    }).catch((err) => {
        console.error(err)
        res.status(400).send({ error: 'Can not get pokemons' })
    })
})

router.post('/pokemons', (req, res) => {
    if (!isSufficientParam(req.body.name) || !isSufficientParam(req.body.type)) {
        res.status(400).send({ error: 'Insufficient parameters: name and type are required parameter' })
        return //return for make sure is end API stage in this case
    }

    pokemon.savePokemon(req.body.name, req.body.type).then((result) => {
        res.sendStatus(201)
    }).catch((err) => {
        console.error(err)
        res.status(400).send({ error: 'Create pokemon is unsuccessfully: invalid parameters' })
    })
})

router.get('/pokemon/:id', (req, res) => {
    if (!isSufficientParam(req.params.id)) {
        res.status(400).send({ error: 'Insufficient parameters: id are required parameter' })
        return
    }

    let id = req.params.id
    // if (!pokemon.isPokemonExitsted(id)) {
    //     res.status(400).send({ error: 'The pokemon could not be found' })
    //     return
    // }

    pokemon.getPokemon(id).then((result) =>{
        res.send(result)
    }).catch((err) => {
        console.error(err)
        res.status(400).send({ error: 'Can not get pokemons' })
    })
})

router.put('/pokemon/:id', async (req, res) => {
    if (!isSufficientParam(req.body.type2)) {
        res.status(400).send({ error: 'Insufficient parameters: type2 are required parameter' })
        return
    }

    if (!isSufficientParam(req.params.id)) {
        res.status(400).send({ error: 'Insufficient parameters: id are required parameter' })
        return
    }

    // if (!pokemon.isPokemonExitsted(id)) {
    //     res.status(400).send({ error: 'Cannot update pokemon: Pokemon is not found' })
    //     return
    // }

    // let p = pokemon.getPokemon(id)
    // p.type2 = req.body.type2

    // let success = pokemon.update(id,type2)

    // if (!success) {
    //     res.status(400).send({ error: 'Update type2 is unsuccessfully' })
    // }
    // res.sendStatus(200)

    let id = req.params.id

    let p = await pokemon.getPokemon(id)

    p.type2 = req.body.type2


    pokemon.update(p).then((result) => {
        res.sendStatus(200)
    }).catch((err) => {
        console.error(err)
        res.status(400).send({ error: 'Update type2 is unsuccessfully' })
    })
})

router.delete('/pokemon/:id', (req, res) => {
    if (!isSufficientParam(req.params.id)) {
        res.status(400).send({ error: 'Insufficient parameters: id are required parameter' })
        return
    }
    let id = req.params.id
    if (!pokemon.isPokemonExitsted(id)) {
        res.status(400).send({ error: 'Cannot delete pokemon: Pokemon is not found' })
        return
    }

    delete pokemons[id - 1]
    res.sendStatus(204)
})

module.exports = router
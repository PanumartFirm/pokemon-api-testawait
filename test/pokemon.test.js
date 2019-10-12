import test from 'ava'
const MongoDBServer = require('mongomem').MongoDBServer
const pokemon = require('../pokemons/pokemon')
require('chai').should()


test.before('start seerMongoDBserver.start', async t =>{
    await MongoDBServer.start()
    const dburi = await MongoDBServer.getConnectionString()
    pokemon.dburi(dburi)
    await pokemon.savePokemon("Risadon","Fire")
})

    // test.after.always('clearup',async t=>{
    //     MongoDBserver.tearDown()
    // })
test('getpokemons()',async t => {  
    let result = await pokemon.getPokemons()
    t.true(Array.isArray(result))
    let p = result[0]
    console.log("result = "+ p.name)
    p.should.have.property('name')
    p.should.have.property('_id')
})
test('update()',async t => {
    let poke = {name : "Gennija", type: "water"}
    let pokemons = await pokemon.update(poke)
    
    pokemons.should.have.property('name')
    pokemons.should.have.property('_id')
 
})




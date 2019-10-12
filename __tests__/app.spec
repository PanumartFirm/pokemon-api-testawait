// const request = require('supertest')
// const chai = require('chai')

// const app = require('../app')
// chai.should()

// describe('Pokemon API', () => {

//     describe('GET /', () => {
//         it('should return 200 ok with "Hello world"', (done) => {
//             request(app).get('/')
//                 .expect(200)
//                 .end((err, res) => {
//                     res.body.should.deep.equal({ message: 'Hello world' })
//                     done()
//                 })
//         })
//     })

//     describe('GET /pokemon/:id', () => {
//         it('should return 200 ok with a pokemon', (done) => {
//             request(app).get('/pokemon/1')
//                 .expect(200)
//                 .end((err, res) => {
//                     res.body.should.to.be.an('object')
//                     res.body.should.to.have.property('id')
//                     res.body.should.to.have.property('name')
//                     res.body.should.to.have.property('type')
//                     done()
//                 })
//         })

//         it('should return 400 Bad Request', (done) => {
//             request(app).get('/pokemon/100')
//                 .expect(400)
//                 .end((err, res) => {
//                     res.body.error.should.equal('The pokemon could not be found')
//                     done()
//                 })
//         })
//     })

//     describe('POST /pokemons', () => {
//         it('should return 201 Create and have new pokemon', (done) => {
//             request(app).post('/pokemons')
//                 .send({ name: 'Pogba', type: 'football' })
//                 .set('Accept', 'application/json')
//                 .expect(201, done)
//         })

//         it('should return 400 Bad Request when missed field', (done) => {
//             request(app).post('/pokemons')
//                 .expect(400)
//                 .end((err, res) => {
//                     res.body.error.should.equal('Insufficient parameters: name and type are required parameter')
//                     done()
//                 })
//         })
//     })

//     describe('PUT /pokemon/:id', () => {
//         it('should return 200 OK and the pokemon has type2', (done) => {
//             request(app).put('/pokemon/1')
//                 .send({ type2: 'bug' })
//                 .set('Accept', 'application/json')
//                 .expect(200, done)
//         })


//         it('should return 400 Bad Request when try to update not existed pokemon', (done) => {
//             request(app).put('/pokemon/111')
//                 .send({ type2: 'bug' })
//                 .set('Accept', 'application/json')
//                 .expect(400)
//                 .end((err, res) => {
//                     res.body.error.should.equal('Cannot update pokemon: Pokemon is not found')
//                     done()
//                 })
//         })
//     })

// })

// describe('Integration Test', () => {
//     it('GET /pokemons should return list of pokemons', (done) => {
//         request('http://localhost:3000').get('/pokemons')
//             .expect(200)
//             .end((err, res) => {
//                 res.body.should.be.a('array')
//                 done()
//             })
//     })
// })
const request = require('supertest')
const app = require('../app')
const {userOne, setupDB} = require('./fixtures/db')


beforeEach(setupDB)

test('Authenticated user should be able to apply for loans', async () => {
    const response = await request(app)
        .post('/loan')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Arnab',
            email: 'arnabpoddar.ap@gmail.com',
            address: 'Kolkata',
            contact: 9845375839,
            amount: 12345,
            start_date: new Date(),
            expiry_date: new Date(),
            type:'Fixed',
        })
        .expect(201)
})


test('Un-Authenticated user should not be able to apply for loans', async () => {
    const response = await request(app)
        .post('/loan')
        .send({
            name: 'Arnab',
            email: 'arnabpoddar.ap@gmail.com',
            address: 'Kolkata',
            contact: 9845375839,
            amount: 12345,
            start_date: new Date(),
            expiry_date: new Date(),
            type:'Fixed',
        })
        .expect(400)
})


test('Duplicate loan amount should not be allowed', async () => {
    const response = await request(app)
        .post('/loan')
        .send({
            name: 'Arnab',
            email: 'arnabpoddar.ap@gmail.com',
            address: 'Kolkata',
            contact: 9845375839,
            amount: 1234,
            start_date: new Date(),
            expiry_date: new Date(),
            type:'Fixed',
        })
        .expect(400)
})


test('Users should be able to view loans', async () => {
    const response = await request(app)
        .get('/loan')
        .expect(200)
})


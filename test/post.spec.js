const app = require ('../src/app');
const request = require ('supertest');
const expect = require ('chai').expect;

describe('Post request', () => {
    it('json response', () => {
        request(app)
        .post('/course')
        .send({"name": "supertest"})
        .set('Accept', 'application/json')
        .end((err, res) =>{
            expect(res.body.name).to.be.equal('supertest')
        })
    });

    it('form response', () => {
        request(app)
        .post('/course')
        .send('name=supertest')
        .set('Accept', 'application/x-www-form-urlencoded')
        .end((err, res) =>{
            expect(200, {'id':'2', 'name':'supertest'});
        })
    });
});
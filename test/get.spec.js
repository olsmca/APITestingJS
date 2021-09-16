const app = require ('../src/app');
const request = require ('supertest');
const expect = require ('chai').expect;

describe('get requests', ()=>{
    it('get course id', ()=>{
        request(app)
        .get('/course/1')
        .end((err, res) => {
            expect (res.body.id).to.be.equal('1');
        })
    });

    it('get query param name', (done) =>{
        request(app)
        .get('/course')
        .query({'name' : 'mocha'})
        .expect(200, {id:'1', name:'mocha'}, done);
    })

    it('get courses status', () =>{
        request(app)
        .get('/courses')
        .end((err, res) =>{
            expect(res.ok).to.be.true;
        })
    })

    it('courses response', () =>{
        request(app)
        .get('/courses')
        .end((err,res) =>{
            expect(res.body.name).to.contain('api');
        })
        
    });
});
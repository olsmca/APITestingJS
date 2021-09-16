const express = require ('express');
const request = require ('supertest');
const expect = require ('chai').expect;

const app = express();

app.get('/first', (err, res) =>{
    res.status(200).json({"ok": "Response"});
});

describe('First test', () =>{
    it('Ok response', () =>{
        request(app)
        .get('/first')
        .end((err,res) =>{
            expect(res.statusCode).to.equal(200);
        })
    });
});

describe('Test mocky.io ', () =>{
    it('Ok response', () =>{
        request("https://run.mocky.io")
        .get('/v3/69bb4e8d-c854-41c5-a1a2-063ed9b3277c')
        .end((err,res) =>{
            expect(res.statusCode).to.equal(200);
            //console.log (res);
        })
    });
});

describe('Second test mocky.io ', (done) =>{
    it('Ok response', () =>{
        request("https://run.mocky.io")
        .get('/v3/69bb4e8d-c854-41c5-a1a2-063ed9b3277c')
        .expect(200, done);
    });
});
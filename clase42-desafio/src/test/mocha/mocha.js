import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const url = 'http://localhost:8080/api';
describe('POST productos ', () => {
    const producto= {
        title: 'producto 1',
        price: 1000,
        description: 'producto de prueba desde mocha',
        image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/966/536/products/1024x1024-21-b321421924a8680bc316440191914454-1024-1024.png',
        stock: 10,
    };
    it('should return 200', (done) => {
        chai
        .request(url)
        .post('/productos')
        .send(producto)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
    it('should return an object', (done) => {
        chai
        .request(url)
        .post('/productos')
        .send(producto)
        .end((err, res) => {
            expect(res.body)
            .to.be.an.instanceOf(Object)
            .that.includes.all.keys({
                producto: ['title', 'price', 'description','image', 'stock'],
            });
            done();
        });
    });
});

describe('GET productos', () => {
    it('should return 200', (done) => {
        chai
        .request(url)
        .get('/productos')
        .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Object);
            done();
        });
    });
    it('should return 200', () => {
        let id = '638eb3ec3c1bf54167ddb822';
        chai
        .request(url)
        .get(`/productos/${id}`)
        .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Object);
        });
    });
});

describe('PUT prods', () => {
    it('should return 200', (done) => {
        let id = 'o98sdy';
        let data = { title: 'nuevo title' };
        chai
        .request(url)
        .put(`/prods/${id}`)
        .send(data)
        .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.be.instanceOf(Object);
            done();
        });
    });
});

describe('DELETE prod(s)', () => {
    it('should return 200 deleteOne', (done) => {
        let id = '78asui';
        chai
        .request(url)
        .delete(`/prods/${id}`)
        .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            done();
        });
    });
    it('should return 200 deleteAll', (done) => {
        chai
        .request(url)
        .delete('/prods')
        .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            done();
        });
    });
});
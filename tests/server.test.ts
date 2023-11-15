import request from 'supertest';
import { app, server} from '../src/server';

afterAll((done) => {
  server.close(() => {done()})
})

describe('GET /', () => {
  it('responds with HTML containing "Lero Lero World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Lero Lero World!');
  });
});
import request from 'supertest';
import { app, server} from '../src/server';

afterAll((done) => {
  server.close(() => {done()})
})

describe('GET /', () => {
  it('responds with HTML containing "Yarn Yield!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Yarn Yield');
  });
});
/**
 * index.tests.ts
 *
 * Test out the SDK live
 **/
import TheOneAPI from '../../src/index.mjs';

describe('src/index', () => {
  const theOneAPI = new TheOneAPI({
    apiKey: process.env.API_KEY
  });

  it('pulls movies', async () => {
    expect(1).toEqual(1);
  });

});

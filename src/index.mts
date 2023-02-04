/**
 * index.ts
 */
import fetch from 'node-fetch';

export type TheOneAPIOptions = {
  apiKey: string,
  limit: number,
  endpoint: string
};

export default class TheOneAPI {

  /**
   * Constructor Options
   */
  private options: TheOneAPIOptions;

  /**
   * Constructor of the SDK
   * @param {Record<string, any>} options any options to set for the SDK globally
   */
  constructor(options: Record<string, any>) {  
    const { apiKey } = options;
    if (typeof apiKey !== 'string') {
      throw new Error('Missing API key');
    }
    this.options = {
      apiKey,
      limit: 10,
      endpoint: 'https://the-one-api.dev/v2',
      ...options
    };
  }

  async *getMovies() {
    
  }

  async getMovieByMovieID(id: string, options?: string) {

  }

  async *getMovieQuotesByMovieID(id: string, options?: string) {
    
  }

  /**
   * Make a single request
   */
  private async makeRequest(path: string, params: Record<string, string>) : Promise<Map<String, any>> {
    const { apiKey, endpoint, limit } = this.options;
    const response = await fetch(`${endpoint}${path}?${new URLSearchParams({
      limit: (limit as unknown) as string,
      ...params
    })}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    return await response.json() as Map<String, any>;
  }

}

/**
 * index.ts
 */
import fetch from 'node-fetch';
export default class TheOneAPI {
    /**
     * Constructor Options
     */
    options;
    /**
     * Constructor of the SDK
     * @param {Record<string, any>} options any options to set for the SDK globally
     */
    constructor(options) {
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
    async getMovieByMovieID(id, options) {
    }
    async *getMovieQuotesByMovieID(id, options) {
    }
    /**
     * Make a single request
     */
    async makeRequest(path, params) {
        const { apiKey, endpoint, limit } = this.options;
        const response = await fetch(`${endpoint}${path}?${new URLSearchParams({
            limit: limit,
            ...params
        })}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        return await response.json();
    }
}

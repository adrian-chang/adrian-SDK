"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * index.ts
 */
const node_fetch_1 = __importDefault(require("node-fetch"));
class TheOneAPI {
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
    async makeRequest(path) {
        const { apiKey, endpoint, limit } = this.options;
        const response = await (0, node_fetch_1.default)(`${endpoint}${path}?${new URLSearchParams({
            limit: limit
        })}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        return await response.json();
    }
}
exports.default = TheOneAPI;

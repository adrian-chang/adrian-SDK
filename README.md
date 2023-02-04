# adrian-SDK

A NodeJS SDK wrapper around [the-one-api.dev](https://the-one-api.dev)


## Prerequisites

```
node 18.x
npm 8.x
```

## Install

```bash
npm i --save @amchang/the-one-api
```

## Use

### Initialization

```js
import TheOneAPI from '@amchang/the-one-api';
const theOneAPI = new TheOneAPI(apiKey, options);
```
* apiKey (string)
  * apiKey is the access token needed to access the API. Sign up from [the-one-api.dev](https://the-one-api.dev) to get one. 
* options (object)
  * limit (number)
    * set the default limit the response size for a given API default. Defaults to 10.

#### getMovies()

#### getMovieByMovieID(id, options)

#### getMovieQuotesByMovieID(id, options)

## Test

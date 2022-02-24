# camelcase-keys-deep2

> Deeply convert the keys of an object to camelCase

## Install

```
$ npm install --save camelcase-keys-deep2
or
$ yarn add camelcase-keys-deep2
```

## Usage

```js
const camelcaseKeysDeep = require('camelcase-keys-deep2');

camelcaseKeysDeep({unicorn_rainbow: {foo_bar: 1}});
//=> {unicornRainbow: {fooBar: 1}}
```

## API

### camelcaseKeysDeep2(input)

#### input

Type: `object`

## Related

- [decamelize-keys-deep](https://github.com/rxaviers/decamelize-keys-deep) for the inverse.

## License

MIT © [Rafael Xavier de Souza](https://rafael.xavier.blog.br)


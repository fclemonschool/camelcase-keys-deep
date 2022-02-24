import {expect} from "chai";
import camelcaseKeysDeep from '../index.js'

describe("camelcaseKeysDeep", () => {
  it("should deeply camelcase the keys of a JSON object", () => {
    const aDate = new Date(2016, 3, 15);
    const json = {
      unicorn_rainbow: {
        foo_bar: 1,
        a_date: aDate,
        an_array: [1, 2, {foo_bar: 3}]
      }
    };
    expect(camelcaseKeysDeep(json)).to.be.deep.equal({
      unicornRainbow: {
        fooBar: 1,
        aDate: aDate,
        anArray: [1, 2, {fooBar: 3}]
      }
    });
  });

  it("should raise if camelcased key would overwrite existing key of the JSON object", () => {
    let json = {unicorn_rainbow: {foo_bar: 1, fooBar: 2}};
    expect(function() {
      camelcaseKeysDeep(json);
    }).to.throw();

    json = {foo: 1}
    expect(() => {
      camelcaseKeysDeep(json);
    }).to.not.throw();
  });

});


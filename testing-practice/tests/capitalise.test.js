const capitalise = require('../functions/capitalise');

test("capitalise 'hello world!' into 'Hello World!'", () => {
    expect(capitalise('hello world!')).toBe('Hello World!');
  });

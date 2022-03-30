const sayHello = require('./sayHello');

test('returns a personalized greeting', () => {
  expect(sayHello('Joel')).toBe("Hi, Joel.");
});

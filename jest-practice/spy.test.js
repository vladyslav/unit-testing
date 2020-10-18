const mathjs = require('mathjs');

test('The mathjs log function', () => {
  const spy = jest.spyOn(mathjs, 'log');
  const result = mathjs.log(1000, 10);

  expect(mathjs.log).toHaveBeenCalled();
  expect(mathjs.log).toHaveBeenCalledWith(1000, 10);
});

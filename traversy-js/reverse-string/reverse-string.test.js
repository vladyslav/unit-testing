const reverseString = require('./reverse-string');

describe('ReverseString:', () => {
  test('should be defined', () => {
    expect(reverseString).toBeDefined();
  });

  test('should reverse the string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('should reverse the string with uppercase', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });
});

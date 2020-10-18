const { sum, mul, sub, div, uppercase, lowercase } = require('./math');

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2);
});

test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1);
});

test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0);
});

test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(1);
});

test(`uppercase 'test' to equal 'TEST'`, done => {
  uppercase('test', str => {
    expect(str).toBe('TEST');
    done();
  });
});

test(`uppercase 'test' to equal 'TEST'`, async () => {
  const str = await uppercase('test');
  expect(str).toBe('TEST');
});

test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase('').catch(e => {
    expect(e).toMatch('Empty string');
  });
});

test(`lowercase 'TEST' to equal 'test'`, () => {
  return lowercase('TEST').then(str => {
    expect(str).toBe('test');
  });
});

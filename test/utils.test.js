const { loadTitle } = require('./utils');

test('should print an uppercaset text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});

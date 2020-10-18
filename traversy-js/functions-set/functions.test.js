const functions = require('./functions');

beforeAll(() => initDB());
afterAll(() => closeDB());

const initDB = () => console.log('Database Initialized...');
const closeDB = () => console.log('Database Closed...');

describe('Functions.add:', () => {
  test('should 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
    expect(functions.add(2, 2)).toEqual(4);
  });

  test('should 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
    expect(functions.add(2, 2)).not.toEqual(5);
  });
});

describe('Functions.isNull:', () => {
  test('should be null', () => {
    expect(functions.isNull()).toBe(null);
    expect(functions.isNull()).toBeNull();
  });
});

describe('Functions.checkValue:', () => {
  test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(null)).not.toBeTruthy();
  });
});

describe('Functions.createUser:', () => {
  test('should be Vlad Vasylenko object', () => {
    expect(functions.createUser()).toEqual({
      firstName: 'Vladyslav',
      lastName: 'Vasylenko'
    });
  });
});

describe('Less than and greater than', () => {
  test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
    expect(load1 + load2).toBeLessThanOrEqual(1500);
  });
});

describe('Regex', () => {
  test('should be no I in a team', () => {
    expect('team').not.toMatch(/I/);
  });
});

describe('Arrays', () => {
  test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
  });
});

describe('Functions.fetchUser', () => {
  test('should return name Leanne Graham', () => {
    expect.assertions(1);
    return functions
      .fetchUser()
      .then(data => expect(data.name).toEqual('Leanne Graham'));
  });

  test('should return name Leanne Graham', async () => {
    expect.assertions(1);
    try {
      const data = await functions.fetchUser();
      expect(data.name).toEqual('Leanne Graham');
    } catch (error) {
      console.log(error);
    }
  });
});

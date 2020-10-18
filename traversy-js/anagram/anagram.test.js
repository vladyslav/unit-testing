const isAnagram = require('./anagram');

describe('Anagram:', () => {
  test('should exist', () => {
    expect(typeof isAnagram).toBe('function');
  });

  test('cinema is an anagram of iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
  });

  test('Dormitory is an anagram of dirty room##', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
  });

  test('Hello is NOT an anagram of alloha', () => {
    expect(isAnagram('Hello', 'alloha')).not.toBeTruthy();
    expect(isAnagram('Hello', 'alloha')).toBeFalsy();
  });
});

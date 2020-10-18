const chunkArray = require('./chunk');

describe('ChunkArray', () => {
  test('should be defined', () => {
    expect(chunkArray).toBeDefined();
  });
  test('should return a chunked array with a length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = chunkArray(numbers, len);
    expect(chunkedArr).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10]
    ]);
  });
});

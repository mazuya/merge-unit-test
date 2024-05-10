const { merge } = require('./merge');

describe('merge function', () => {
  it('can merge 3 sorted arrays in descending order', () => {
    const collection1: number[] = [1, 3, 5];
    const collection2: number[] = [-2, -1, 0];
    const collection3: number[] = [2, 4];
    const expectedResult: number[] = [-2, -1, 0, 1, 2, 3, 4, 5];

    const mergedArray = merge(collection1, collection2, collection3);

    expect(mergedArray).toEqual(expectedResult);
  });

  it('handle empty arrays', () => {
    const collection1: number[] = [];
    const collection2: number[] = [-3, -1];
    const collection3: number[] = [];
    const expectedResult: number[] = [-3, -1];

    const mergedArray = merge(collection1, collection2, collection3);

    expect(mergedArray).toEqual(expectedResult);
  });
});

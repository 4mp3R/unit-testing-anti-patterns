import { ops } from "./src";

import MathLib from '../lib/math';

describe("ops", () => {
  let sumMock = jest.fn();
  let divMock = jest.fn();

  beforeEach(() => {
    sumMock.mockReturnValue(4);
    divMock.mockReturnValue(2);

    MathLib.sum = sumMock;
    MathLib.div = divMock;
  });

  afterEach(() => {
    sumMock.mockClear();
    divMock.mockClear();
  });

  describe('some describe', () => {
    it('returns the correct object', () => {
      expect(ops(3, 3)).toEqual({
        sum: 4,
        div: 2
      });
    });
  });
});

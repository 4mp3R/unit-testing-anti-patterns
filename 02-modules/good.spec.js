import { ops } from "./src";

import { sum, div } from '../lib/math';

jest.mock('../lib/math');

describe("average", () => {
  beforeEach(() => {
    sum.mockReturnValue(4);
    div.mockReturnValue(2);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('with mocked helpers', () => {
    it('returns the correct object', () => {
      expect(ops(3, 3)).toEqual({
        sum: 4,
        div: 2
      });
    });
  });
});

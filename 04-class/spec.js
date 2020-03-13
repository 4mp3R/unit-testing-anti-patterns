import MathHelper from '../lib/math-class';
import { sum } from "./src";

// jest.mock('../lib/math-class', () => {
//   return function() {
//     return {
//       sum: () => 777
//     }
//   }
// });

describe("sum", () => {
  beforeEach(() => {
    MathHelper.prototype.sum = () => 777;
  });

  it('return the sum', () => {
    expect(sum(1, 2)).toBe(777);
  });
});

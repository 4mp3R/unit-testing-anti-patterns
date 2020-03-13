import { avg } from "./src";

describe("average", () => {
  let a;
  let b;

  beforeEach(() => {
    a = 4;
    b = 6;
  });

  describe("inner describe", () => {
    a = 3;
    b = 11;

    it("returns the correct average value", () => {
      expect(avg(a, b)).toBe(7);
    });
  });
});

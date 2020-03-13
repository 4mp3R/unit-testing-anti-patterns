import { rnd } from "./src";

describe("mock globals", () => {
  beforeEach(() => {
    global.Math.random = () => 0.33;
    // jest.spyOn(Math, 'random').mockReturnValue(0.33)
  });

  afterEach(() => {
    // jest.restoreAllMocks();
  });

  it('returns the random number', () => {
    expect(rnd()).toBe(33);
  });
});

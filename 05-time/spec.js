import { advanceTo as advanceToTime, clear as clearDateMock } from 'jest-date-mock';

import { getNewListing, IntervalMeasurer } from "./src";

describe("time sensitive", () => {
  beforeEach(() => {
    // jest.spyOn(Date, 'now').mockReturnValue(123)
  });

  it('returns the new listing object', () => {
    expect(getNewListing()).toEqual({
      id: expect.any(Number),
      updated: expect.any(Number)
    })

    // expect(getNewListing()).toEqual({
    //   id: expect.any(Number),
    //   updated: 123
    // })
  });
});

// describe('intervals', () => {
//   beforeEach(() => {
//     advanceToTime(1000);
//   });
//
//   afterEach(() => {
//     clearDateMock();
//   });
//
//   it('returns the interval between two invocations', () => {
//     expect(IntervalMeasurer.getInterval()).toBeNull();
//     advanceToTime(1777);
//     expect(IntervalMeasurer.getInterval()).toBe(777);
//   });
// });

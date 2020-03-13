export const getNewListing = () => ({
  id: 123,
  updated: Date.now()
});

export class IntervalMeasurer {
  static last = null;

  static getInterval() {
    if (this.last === null) {
      this.last = Date.now();
      return null;
    }

    const now = Date.now();
    const last = this.last;
    this.last = now;
    return now - last;
  }
}

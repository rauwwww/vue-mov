export class DateHelpers {
  /**
   * @param ts expects time format like '2012.08.10' and returns unix in milis
   */
  public toUnixMillis(ts: any) {
    return new Date(ts).getTime();
  }

  /**
   * @param ts expects time format like '2012.08.10' and returns unix in seconds
   */
  public toUnixSeconds(ts: any) {
    return new Date(ts).getTime() / 1000;
  }
}

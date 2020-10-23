import { timeConversion } from './time-conversion';

describe('Time Conversion', () => {
  test('07:05:45PM = 19:05:45', () => {
    const tc = timeConversion('07:05:45PM');
    expect(tc).toBe('19:05:45');
  });

  test('12:00:00AM = 00:00:00', () => {
    const tc = timeConversion('12:00:00AM');
    expect(tc).toBe('00:00:00');
  });

  test('12:00:00PM = 12:00:00', () => {
    const tc = timeConversion('12:00:00PM');
    expect(tc).toBe('12:00:00');
  });

  test('invalid input example 13:00:00PM', () => {
    const tc = timeConversion('13:00:00PM');
    expect(tc).toBe('invalid input');
  });

  test('No AM or PM example "12:00:00"', () => {
    const tc = timeConversion('12:00:00');
    expect(tc).toBe('invalid input');
  });

  test('Empty input', () => {
    const tc = timeConversion();
    expect(tc).toBe('invalid input');
  });
});

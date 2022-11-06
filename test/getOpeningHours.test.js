const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');
const { dayError } = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Expect getOpeningHours to be a function.', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  test('to throw a message the zoo is closed if the day is monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  test('expect function getOpeningHours return object Hours if dont receive any parameters', () => {
    expect(getOpeningHours()).toBe(hours);
  });

  test('to throw a message the zoo is open if is a day different from monday', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  test('to throw an error message if abreviation is different from AM /PM', () => {
    const actual = () => (getOpeningHours('Tuesday', '09:00-AA'));
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(actual).toThrow(expected);
  });

  test('to throw an erros message if number is bigger than 59 mintes', () => {
    const actual = () => (getOpeningHours('Tuesday', '09:60-AM'));
    const expected = 'The minutes must be between 0 and 59';
    expect(actual).toThrow(expected);
  });

  test('to throw an error message if number is bigger than 12 hours', () => {
    const actual = () => (getOpeningHours('Tuesday', '13:00-AM'));
    const expected = 'The hour must be between 0 and 12';
    expect(actual).toThrow(expected);
  });

  test('to throw an error message if days are diferent from weekDays', () => {
    const actual = () => (getOpeningHours('oi', '13:00-AM'));
    const expected = dayError;
    expect(actual).toThrow(expected);
  });

  test('to throw an error message if minutes are different from numbers', () => {
    const actual = () => (getOpeningHours('Tuesday', '13:a0-AM'));
    const expected = 'The minutes should represent a number';
    expect(actual).toThrow(expected);
  });

  test('to throw a message the zoo is closed if the day is Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});

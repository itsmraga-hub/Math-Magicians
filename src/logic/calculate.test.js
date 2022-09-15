import calculate from './calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};

const obj1 = calculate(obj, 'AC');

const obj2 = calculate(obj1, '9');

const obj3 = calculate(obj2, 'x');

const obj4 = calculate(obj3, '8');

// buttonNames = 'AC', 'x', '+', '.', '=', '+/-', Number

describe('Calculation tests: ', () => {
  test('Calculates', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('Calculates', () => {
    expect(calculate(obj1, '9')).toEqual({
      total: null,
      next: '9',
    });
  });
  test('Calculates', () => {
    expect(calculate(obj2, 'x')).toEqual({
      total: '9',
      next: null,
      operation: 'x',
    });
  });
  test('Calculates', () => {
    expect(calculate(obj3, '8')).toEqual({
      total: '9',
      next: '8',
      operation: 'x',
    });
  });
  test('Calculates', () => {
    expect(calculate(obj4, '=')).toEqual({
      total: '72',
      next: null,
      operation: null,
    });
  });
});

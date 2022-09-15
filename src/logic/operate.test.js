import operate from './operate';

describe('Operation Tests for x, ÷, + and -:', () => {
  test('Division(÷)', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
    expect(operate(10, 2, '÷')).toBe('5');
    expect(operate(-2, 8, '÷')).toBe('-0.25');
    expect(operate(40, 2, '÷')).toBe('20');
  });
  test('Multiplication(x)', () => {
    expect(operate(1, -2, 'x')).toBe('-2');
    expect(operate(-10, -2, 'x')).toBe('20');
    expect(operate(7, 8, 'x')).toBe('56');
    expect(operate(40, 2, 'x')).toBe('80');
  });
  test('Subtraction(-)', () => {
    expect(operate(1, 2, '-')).toBe('-1');
    expect(operate(10, 2, '-')).toBe('8');
    expect(operate(7, 8, '-')).toBe('-1');
    expect(operate(40, 2, '-')).toBe('38');
  });
  test('Addition(+)', () => {
    expect(operate(1, 2, '+')).toBe('3');
    expect(operate(10, 2, '+')).toBe('12');
    expect(operate(7, 8, '+')).toBe('15');
    expect(operate(40, 2, '+')).toBe('42');
  });
});

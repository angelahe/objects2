import math from "../components/math";

test('Test the math functions', () => {
    console.log('Testing sum');
    expect(math.sum(1,2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('Test the math functions', () => {
    console.log('Testing subtract');
    expect(math.sub(6,2)).toBe(4);
});

test('Test the math functions', () => {
    console.log('Testing multiply');
    expect(math.mult(2,3)).toBe(6);
});

test('Test the math functions', () => {
    console.log('Testing divide');
    expect(math.div(6,2)).toBe(3);
});
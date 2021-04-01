import fizzbuzz from './fizzbuzz';

describe('fizzbuzz', () => {
    test('should print 1 when it receives 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    })
});
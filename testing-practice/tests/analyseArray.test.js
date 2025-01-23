const analyseArray = require('../functions/analyseArray');

describe('analyseArray', () => {
    test('return average number', () => {
        expect(analyseArray([1,8,3,4,2,6]).average).toBe(4);
	});
    test('return minimum number', () => {
        expect(analyseArray([1,8,3,4,2,6]).min).toBe(1);
	});
    test('return maximum number', () => {
        expect(analyseArray([1,8,3,4,2,6]).max).toBe(8);
	});
    test('return count', () => {
        expect(analyseArray([1,8,3,4,2,6]).length).toBe(6);
	});
    test('print all properties', () => {
        expect(analyseArray([1,8,3,4,2,6])).toEqual(
            {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        );
    });
});

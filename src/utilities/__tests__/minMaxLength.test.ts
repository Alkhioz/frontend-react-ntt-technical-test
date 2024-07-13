import { minMaxLength } from "../minMaxLength.utility";

describe('minMaxLength test', () => {

    test('returns true when string length is within the min and max range', () => {
        expect(minMaxLength(3, 10)('PRE3999')).toBe(true);
    });

    test('returns false when string length is below the minimum range', () => {
        expect(minMaxLength(3, 10)('PR')).toBe(false);
    });

    test('returns false when string length is above the maximum range', () => {
        expect(minMaxLength(3, 10)('PRE39999999')).toBe(false);
    });

    test('returns true when string length is exactly the minimum range', () => {
        expect(minMaxLength(3, 10)('PRE')).toBe(true);
    });

    test('returns true when string length is exactly the maximum range', () => {
        expect(minMaxLength(3, 10)('PRE3999999')).toBe(true);
    });

});
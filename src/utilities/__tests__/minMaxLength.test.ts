import { minMaxLength } from "../minMaxLength.utility";

describe('minMaxLength test', () => {

    test('returns true when string length is within the min and max range', () => {
        expect(minMaxLength('PRE3999', 3, 10)).toBe(true);
    });

    test('returns false when string length is below the minimum range', () => {
        expect(minMaxLength('PR', 3, 10)).toBe(false);
    });

    test('returns false when string length is above the maximum range', () => {
        expect(minMaxLength('PRE39999999', 3, 10)).toBe(false);
    });

    test('returns true when string length is exactly the minimum range', () => {
        expect(minMaxLength('PRE', 3, 10)).toBe(true);
    });

    test('returns true when string length is exactly the maximum range', () => {
        expect(minMaxLength('PRE3999999', 3, 10)).toBe(true);
    });

});
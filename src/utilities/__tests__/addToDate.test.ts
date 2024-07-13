import { addToDate } from "../addToDate.utility";

describe('addToDate test', () => {

    test('adds 1 year to 2024-07-12', () => {
        const initialDate = new Date('07-12-2024');
        const newDate = addToDate(initialDate, { years: 1 });
        expect(newDate.getFullYear()).toBe(2025);
        expect(newDate.getMonth()).toBe(6);
        expect(newDate.getDate()).toBe(12);
    });

    test('adds 1 month to 2024-07-12', () => {
        const initialDate = new Date('07-12-2024');
        const newDate = addToDate(initialDate, { months: 1 });
        expect(newDate.getFullYear()).toBe(2024);
        expect(newDate.getMonth()).toBe(7);
        expect(newDate.getDate()).toBe(12);
    });

    test('adds 1 day to 2024-07-12', () => {
        const initialDate = new Date('07-12-2024');
        const newDate = addToDate(initialDate, { days: 1 });
        expect(newDate.getFullYear()).toBe(2024);
        expect(newDate.getMonth()).toBe(6);
        expect(newDate.getDate()).toBe(13);
    });
    
});
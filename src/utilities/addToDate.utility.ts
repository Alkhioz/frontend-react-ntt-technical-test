/**
 * @typedef {Object} addToDateOptionsType
 * @property {number} [years] - The number of years to add.
 * @property {number} [months] - The number of months to add.
 * @property {number} [days] - The number of days to add.
 */
export type addToDateOptionsType = {
    years?: number,
    months?: number,
    days?: number,
}
/**
 * Adds years, months, and days to a given date.
 * @param {Date} date - The initial date.
 * @param {addToDateOptionsType} options - The options for adding to the date.
 * @returns {Date} The new date with the added years, months, and days.
 */
export function addToDate(date: Date, options: addToDateOptionsType) {
    const newDate = new Date(date);
    const { years, months, days } = options;
    if(years) newDate.setFullYear(newDate.getFullYear() + years);
    if(months) newDate.setMonth(newDate.getMonth() + months);
    if(days) newDate.setDate(newDate.getDate() + days);
    return newDate;
}
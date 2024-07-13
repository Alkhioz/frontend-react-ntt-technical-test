/**
 * Checks if a string is between a min and max value.
 * @param {string} str - The string to evaluate.
 * @param {number} min - The minimun number of characters.
 * @param {number} max - The maximun number of characters
 * @returns {boolean} 
 */
export function minMaxLength(str: string, min: number, max: number) {
    const strlen = str.length;
    return strlen >= min && strlen <= max;
}
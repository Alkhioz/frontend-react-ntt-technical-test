export function minMaxLength(str: string, min: number = 0, max?: number) {
    const strlen = str.length;
    if(!max) return strlen >= min;
    return strlen >= min && strlen <= max;
}
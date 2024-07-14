export type DataType<T> = {
    [K in keyof T]: T[K];
};

export type keys<T> = keyof T;
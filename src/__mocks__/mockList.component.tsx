import { DataType, keys } from "../financialProducts/domain/datatype.type";

export type MockListDataProps = {
    id: number;
    name: string;
    status: boolean;
};

type MockListComponentProps<T> = {
    data: T[]
};

export function MockListComponent<T extends DataType<T>>(props: MockListComponentProps<T>) {
    return (
        <ul
            style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                marginTop: '1rem',
            }}
        >
            {props.data.map((elm, index) => (
                <li
                    key={index}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                    }}
                >
                    {Object.keys(elm).map((key, index2) => (
                        <span key={index2}>{elm?.[key as keys<T>]}</span>
                    ))}
                </li>
            ))}
        </ul>
    );
}
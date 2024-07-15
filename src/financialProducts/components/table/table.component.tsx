import { DataType, keys } from '../../domain/datatype.type';
import './table.component.css';

type HeaderType = {
    displayName: string;
    disabled?: boolean;
}

type CustomHeaderType = {
    display: React.ReactNode;
    disabled?: boolean;
}

type KeyBodyType = HeaderType & {
    key: string;
}

type RenderBodyType<T> = HeaderType & {
    render: (row: T) => React.ReactNode
}

type RenderBodyCustomHeaderType<T> = CustomHeaderType & {
    render: (row: T) => React.ReactNode
}

export type ThemeType<T> = (KeyBodyType | RenderBodyType<T> | RenderBodyCustomHeaderType<T>)[];

type TableProps<T> = {
    theme: ThemeType<T>,
    data: T[]
};

function TableHeader<T>({ theme }: { theme: ThemeType<T> }) {
    return (
        <thead className='tableHeader'>
            <tr>
                {

                    theme?.map((elm, idx) => {
                        if ('displayName' in elm) {
                            return <th className={'tableHeaderItem'} key={idx}>{(elm as HeaderType).displayName}</th>;
                        }
                        return <th className={'tableHeaderItem'} key={idx}>{(elm as CustomHeaderType).display}</th>;
                    })
                }
            </tr>
        </thead>
    );
}

function TableBody<T extends DataType<T>>({ data, theme }: { data: T[], theme: ThemeType<T> }) {
    return (
        <tbody>
            {
                data?.map((elm: T, idx) => (
                    <tr key={idx}>
                        {
                            theme?.map((tm, idx2) => {
                                if ('key' in tm) {
                                    return (
                                        <td
                                            className={`tableBodyItem ${elm[tm.key as keys<T>] === '' ? 'emptyElement' : ''}`}
                                            key={idx2}
                                        >
                                            {
                                                elm[tm.key as keys<T>]
                                            }
                                        </td>
                                    );
                                }
                                return (
                                    <td
                                        className={`tableBodyItem ${ (tm as RenderBodyType<T>).render(elm) === '' ? 'emptyElement' : ''}`}
                                        key={idx2}
                                    >
                                        {
                                            (tm as RenderBodyType<T>).render(elm)
                                        }
                                    </td>
                                );
                            })
                        }
                    </tr>
                ))
            }
        </tbody>
    );
}

export function Table<T extends DataType<T>>({
    data,
    theme,
}: TableProps<T>) {
    return (
        <div className='tableContainer'>
            <table className="table">
                <TableHeader<T>
                    theme={theme}
                />
                <TableBody<T>
                    theme={theme}
                    data={data}
                />
            </table>
        </div>
    );
}
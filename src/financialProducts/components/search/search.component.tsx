import React, { useMemo, useState } from 'react';
import "./search.component.css";
import { DataType, keys } from '../../domain/datatype.type';

type SearchProps<T, L> = {
    name?: string;
    id?: string;
    data: T[];
    configuration?: L;
};

export function Search<T extends DataType<T>, L>(Component: React.ComponentType<SearchProps<T, L>>) {
    return function WrappedComponent(props: SearchProps<T, L>) {
        const [searchTerm, setSearchTerm] = useState<string | null>(null);
        const data = useMemo(() => {
            if (!searchTerm) return props.data;
            return props.data.filter((elm: T) => {
                return Object.keys(elm).some((key) => {
                    const value = elm[key as keyof T];
                    if (typeof value === 'number') {
                        return (value as keys<T>).toString() === searchTerm;
                    }
                    if (typeof value === 'string') {
                        return (value as string)?.toLocaleUpperCase().includes(
                            searchTerm?.toLocaleUpperCase()
                        );
                    }
                    return false;
                });
            });
        }, [props.data, searchTerm]);
        return (
            <div className='searchContainer'>
                <div className='searchHeader'>
                    <input
                        className='search'
                        type="text"
                        name={props.name}
                        id={props.id}
                        placeholder='Search...'
                        onChange={(e) => setSearchTerm(e.target.value || null)}
                    />
                    {
                        (
                            props.configuration
                            && typeof props.configuration === 'object'
                            && 'actionButton' in props.configuration
                        )
                            ? <div>{(props.configuration.actionButton as React.ReactNode)}</div>
                            : null
                    }

                </div>
                <Component {...{ configuration: props.configuration, data, id: props?.id, }} />
            </div>
        );
    }
}
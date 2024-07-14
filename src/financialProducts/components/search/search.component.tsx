import React, { useMemo, useState } from 'react';
import "./search.component.css";

type SearchProps<T> = {
    name?: string;
    id?: string;
    data: T[];
};

export function Search<T extends object>(Component: React.ComponentType<SearchProps<T>>) {
    return function WrappedComponent(props: SearchProps<T>) {
        const [searchTerm, setSearchTerm] = useState<string | null>(null);
        const data = useMemo(() => {
            if (!searchTerm) return props.data;
            return props.data.filter((elm: T) => {
                return Object.keys(elm).some((key) => {
                    const value = elm[key as keyof T];
                    if (typeof value === 'number') {
                        return value.toString() === searchTerm;
                    }
                    if (typeof value === 'string') {
                        return value?.toLocaleUpperCase().includes(
                            searchTerm?.toLocaleUpperCase()
                        );
                    }
                    return false;
                });
            });
        }, [props.data, searchTerm]);
        return (
            <div className='searchContainer'>
                <input
                    className='search'
                    type="text"
                    name={props.name}
                    id={props.id}
                    placeholder='Search...'
                    onChange={(e) => setSearchTerm(e.target.value || null)}
                />
                <Component {...{ data, id: props?.id }} />
            </div>
        );
    }
}
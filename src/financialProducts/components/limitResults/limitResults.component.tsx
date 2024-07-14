import React, { useMemo, useState } from 'react';
import "./limitResults.component.css";
import { Quantity } from '../quantity/quantity.component';
import { Select } from '../select/select.component';

type SearchProps<T> = {
    id?: string | undefined;
    data: T[];
};

export function LimitResults<T extends object>(Component: React.ComponentType<SearchProps<T>>) {
    return function WrappedComponent(props: SearchProps<T>) {
        const [ maxNumberOfElements, setMaxNumberOfElements ] = useState<number>(5);
        const data = useMemo(() => {
            return props.data.slice(0, maxNumberOfElements);
        }, [props.data, maxNumberOfElements]);
        const onChange = (value:string) => {
            if(!isNaN(+value)) setMaxNumberOfElements(+value);
        }
        const id = props?.id;
        return (
            <div className='limitResultsContainer'>
                <Component {...{ data, id }} />
                <div className='limitResultsFooter'>
                    <Quantity quantity={data?.length} />
                    <div style={{ flexGrow: '1'}}></div>
                    <Select
                        id={id ? `select-${id}`: undefined}
                        options={[
                            {
                                displayText: '5',
                                value: '5',
                            },{
                                displayText: '10',
                                value: '10',
                            },{
                                displayText: '20',
                                value: '20',
                            }
                        ]}
                        onChange={(evt)=>onChange(evt.target.value)}
                    />
                </div>
            </div>
        );
    }
}
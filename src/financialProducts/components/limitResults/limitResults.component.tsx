import React, { useMemo, useState } from 'react';
import "./limitResults.component.css";
import { Quantity } from '../quantity/quantity.component';
import { Select } from '../select/select.component';
import { DataType } from '../../domain/datatype.type';

type LimitProps<T, L> = {
    id?: string | undefined;
    data: T[];
    configuration?: L;
};

export function LimitResults<T extends DataType<T>, L>(Component: React.ComponentType<LimitProps<T, L>>) {
    return function WrappedComponent(props: LimitProps<T, L>) {
        const [ maxNumberOfElements, setMaxNumberOfElements ] = useState<number>(5);
        const data = useMemo(() => {
            return props.data.slice(0, maxNumberOfElements);
        }, [props.data, maxNumberOfElements]);
        const onChange = (value:string) => {
            if(!isNaN(+value)) setMaxNumberOfElements(+value);
        }
        const id = props?.id;
        const configuration = props?.configuration;
        return (
            <div className='limitResultsContainer'>
                <Component {...{ data, id, configuration }} />
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
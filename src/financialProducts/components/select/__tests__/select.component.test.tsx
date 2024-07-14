import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react";
import { Select } from '../select.component';
describe('Select component test', () => {
    it('The element gets rendered with the proper text', () => {
        const { getByText } = render(
            <Select
                id={'1'}
                options={[
                    {
                        displayText: '5',
                        value: '5',
                    }, {
                        displayText: '10',
                        value: '10',
                    }, {
                        displayText: '20',
                        value: '20',
                    },
                ]}
            />
        );
        fireEvent.change(getByText('5'), { target: { value: '10' } });
        expect(getByText('5')).toBeInTheDocument();
    });
    it('The element shows no data message', () => {
        const { getByText } = render(
            <Select
                options={[]}
            />
        );
        expect(getByText('No data')).toBeInTheDocument();
    });
});
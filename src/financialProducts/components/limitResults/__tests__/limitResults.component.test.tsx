import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react";
import { MockListComponent, MockListDataProps } from '../../../../__mocks__/mockList.component';
import { LimitResults } from '../limitResults.component';

const WithLimitResultsComponent = LimitResults<MockListDataProps, unknown>(MockListComponent);

describe('LimitResults component test', () => {
    it('The element renders', () => {
        const { getByText } = render(
            <WithLimitResultsComponent
                data={[
                    {
                        id: 1,
                        name: 'one',
                        status: true,
                    },
                    {
                        id: 2,
                        name: 'two',
                        status: false,
                    },
                ]}
            />
        );
        expect(getByText('one')).toBeInTheDocument();
    });

    it('The element changes', () => {
        const { container, getByText } = render(
            <WithLimitResultsComponent
                id='limit'
                data={[
                    {
                        id: 1,
                        name: 'one',
                        status: true,
                    },
                    {
                        id: 2,
                        name: 'two',
                        status: false,
                    },
                ]}
            />
        );
        const select = container.querySelector('#select-limit');
        if (select) {
            fireEvent.change(select, { target: { value: null } });
            fireEvent.change(select, { target: { value: '5' } });
        }
        expect(getByText('one')).toBeInTheDocument();
    });
});
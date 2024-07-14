import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react";
import { Search } from '../search.component';
import { MockListComponent, MockListDataProps } from '../../../../__mocks__/mockList.component';

const WithSearchComponent = Search<MockListDataProps>(MockListComponent);

describe('Search component test', () => {
    it('The element renders', () => {

        const { container } = render(
            <WithSearchComponent
                data={[
                    {
                        id: 1,
                        name: 'one',
                        status: true,
                    },
                    {
                        id: 2,
                        name: 'tow',
                        status: false,
                    },
                ]}
                id='search'
            />
        );
        const search = container.querySelector('#search');
        if (search) {
            fireEvent.change(search, { target: { value: '1' } });
            fireEvent.change(search, { target: { value: null } });
        }
        expect(
            container.querySelector('#search')
        ).toBeInTheDocument();
    });
});
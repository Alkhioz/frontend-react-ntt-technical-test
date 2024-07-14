import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react";
import { Search } from '../search.component';

type TestDataProps = {
    id: number;
    name: string;
    status: boolean;
};

type ItemComponentProps<T> = {
    data: T[]
};

function ItemComponent<T extends object>(props: ItemComponentProps<T>) {
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
                        <span key={index2}>{(elm as any)?.[key]}</span>
                    ))}
                </li>
            ))}
        </ul>
    );
}
const WithSearchComponent = Search<TestDataProps>(ItemComponent);

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
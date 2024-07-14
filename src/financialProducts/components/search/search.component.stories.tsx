import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './search.component';

type TestDataProps = {
    id: number;
    name: string;
};

type ItemComponentProps<T> = {
    data: T[]
};

const WithSearchComponent = Search<TestDataProps>(ItemComponent);

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

const meta: Meta<typeof Search<TestDataProps>> = {
    component: WithSearchComponent,
    decorators: [
        (Story) => (
            <div style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Story />
            </div>
        )
    ],
};

export default meta;
type Story = StoryObj<typeof Search<TestDataProps>>;

export const WithValidImageUrl: Story = {
    args: {
        data: [
            {
                id: 1,
                name: 'First Element'
            },
            {
                id: 2,
                name: 'Second Element'
            },
            {
                id: 3,
                name: 'Third Element'
            },
        ],
        id: 'search',
        name: 'search',
    }
};
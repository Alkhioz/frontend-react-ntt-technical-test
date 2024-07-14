import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './search.component';
import { MockListComponent, MockListDataProps } from '../../../__mocks__/mockList.component';

const WithSearchComponent = Search<MockListDataProps>(MockListComponent);


const meta: Meta<typeof Search<MockListDataProps>> = {
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
type Story = StoryObj<typeof Search<MockListDataProps>>;

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
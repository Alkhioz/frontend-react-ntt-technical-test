import type { Meta, StoryObj } from '@storybook/react';
import { MockListComponent, MockListDataProps } from '../../../__mocks__/mockList.component';
import { LimitResults } from './limitResults.component';

const WithSearchComponent = LimitResults<MockListDataProps>(MockListComponent);


const meta: Meta<typeof LimitResults<MockListDataProps>> = {
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
type Story = StoryObj<typeof LimitResults<MockListDataProps>>;

export const Default: Story = {
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
            {
                id: 4,
                name: 'Fourth Element'
            },
            {
                id: 5,
                name: 'Fifth Element'
            },
            {
                id: 6,
                name: 'Sixth Element'
            },
            {
                id: 7,
                name: 'Seventh Element'
            },
            {
                id: 8,
                name: 'Eighth Element'
            },
        ],
        id: 'list'
    }
};
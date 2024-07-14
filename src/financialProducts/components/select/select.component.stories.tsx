import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select.component';

const meta: Meta<typeof Select> = {
    component: Select,
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
                <div
                    style={{
                        width: '100%',
                        maxWidth: '100px',
                    }}
                >
                    <Story />
                </div>
            </div>
        )
    ],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        options: [
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
        ],
        disabled: false,
    }
};

export const NoOptions: Story = {
    args: {
        options: [],
        disabled: false,
    }
};


export const Disabled: Story = {
    args: {
        options: [
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
        ],
        disabled: true,
    }
};
import type { Meta, StoryObj } from '@storybook/react';

import { Quantity } from './quantity.component';

const meta: Meta<typeof Quantity> = {
    component: Quantity,
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
                <div style={{
                    maxWidth: '100px',
                }}>
                    <Story />
                </div>
            </div>
        )
    ],
    argTypes: {
        quantity: {
            control: 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Quantity>;

export const Default: Story = {
    args: {
        quantity: 12,
    }
};

import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip.component';

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        )
    ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        message: 'This is the tooltip',
    }
};

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button.component';

const meta: Meta<typeof Button> = {
    component: Button,
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
                    maxWidth: '24rem',
                }}>
                <Story />
                </div>
            </div>
        )
    ],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: {
                type: 'radio',
            }
        },
        children: {
            control: {
                disable: true,
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: <>Primary</>
    }
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: <>secondary</>
    },
};

export const PrimaryDisabled: Story = {
    args: {
        variant: 'primary',
        children: <>Primary</>,
        disabled: true,
    },
};

export const SecondaryDisabled: Story = {
    args: {
        variant: 'secondary',
        children: <>secondary</>,
        disabled: true,
    },
};
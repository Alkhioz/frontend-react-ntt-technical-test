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
                type: 'select',
            }
        },
        children: {
            control: {
                disable: true,
            }
        },
        id : {
            control: {
                type: 'text'
            }
        },
        disabled : {
            control: {
                type: 'boolean'
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: <>Primary</>,
        disabled: false,
        id: '',
    }
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: <>secondary</>,
        disabled: false,
        id: '',
    },
};

export const PrimaryDisabled: Story = {
    args: {
        variant: 'primary',
        children: <>Primary</>,
        disabled: true,
        id: '',
    },
};

export const SecondaryDisabled: Story = {
    args: {
        variant: 'secondary',
        children: <>secondary</>,
        disabled: true,
        id: '',
    },
};
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input.component';

const meta: Meta<typeof Input> = {
    component: Input,
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
        id: {
            control: {
                disable: true,
            }
        },
        labelText: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        validationRules: {
            control: {
                disable: true,
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithoutErrorMessage: Story = {
    args: {
        id: '1',
        labelText: 'Without error message',
        placeholder: 'Type any data and it will not fail',
        validationRules: [],
    }
};

export const WithErrorMessage: Story = {
    args: {
        id: '2',
        labelText: 'With error message',
        placeholder: 'Type any data and it will fail',
        validationRules: [{
            action: () => false,
            errorText: "The data is incorrect"
        }],
    }
};
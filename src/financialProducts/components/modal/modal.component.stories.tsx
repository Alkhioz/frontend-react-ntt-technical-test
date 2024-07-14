import type { Meta, StoryObj } from '@storybook/react';

import { ModalBody } from './modal.component';

const meta: Meta<typeof ModalBody> = {
    component: ModalBody,
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
        buttons: {
            control: {
                disable: true,
            }
        }
    },
};

export default meta;
type Story = StoryObj<typeof ModalBody>;

export const MultipleButtons: Story = {
    args: {
        open: true,
        message: 'Are you sure you want to delete the selected component?',
        buttons: [
            {
            variant: 'secondary',
            action: () => { },
            text: 'Cancelar'
        }, {
            variant: 'primary',
            action: () => { },
            text: 'Continuar'
        }
    ]
    }
};

export const SingleButton: Story = {
    args: {
        open: true,
        message: 'Error in process please try again',
        buttons: [
            {
            variant: 'primary',
            action: () => { },
            text: 'Try again'
        },
    ]
    }
};
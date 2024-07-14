import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './logo.component';

const meta: Meta<typeof Logo> = {
    component: Logo,
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
        src: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WithValidImageUrl: Story = {
    args: {
        src: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
};

export const WithoutValidImageUrl: Story = {
    args: {
        src: '',
    }
};
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header.component';

const meta: Meta<typeof Header> = {
    component: Header,
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
                backgroundColor: 'gray',
            }}>
                <Story />
                <div
                    style={{
                        padding: '1rem',
                    }}
                >MAIN CONTENT</div>
            </div>
        )
    ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

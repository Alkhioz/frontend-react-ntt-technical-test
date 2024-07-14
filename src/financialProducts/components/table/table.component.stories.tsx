import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table.component';

export type MockListDataProps = {
    id: number;
    name: string;
    age: number;
    address: string;
    phone: string;
    email: string;
    company: string;
    department: string;
    title: string;
    startDate: string;
};

const meta: Meta<typeof Table<MockListDataProps>> = {
    component: Table<MockListDataProps>,
    decorators: [
        (Story) => (
            <Story />
        )
    ],
};

export default meta;
type Story = StoryObj<typeof Table<MockListDataProps>>;

export const Default: Story = {
    args: {
        data: [
            { id: 1, name: 'First Element', age: 25, address: '123 Main St', phone: '123-456-7890', email: 'first@example.com', company: 'Company A', department: 'Dept 1', title: 'Developer', startDate: '2020-01-01' },
            { id: 2, name: 'Second Element', age: 30, address: '456 Oak St', phone: '234-567-8901', email: 'second@example.com', company: 'Company B', department: 'Dept 2', title: 'Manager', startDate: '2019-02-15' },
            { id: 3, name: 'Third Element', age: 28, address: '789 Pine St', phone: '345-678-9012', email: 'third@example.com', company: 'Company C', department: 'Dept 3', title: 'Analyst', startDate: '2018-03-20' },
            { id: 4, name: 'Fourth Element', age: 35, address: '101 Maple St', phone: '456-789-0123', email: 'fourth@example.com', company: 'Company D', department: 'Dept 4', title: 'Designer', startDate: '2017-04-25' },
            { id: 5, name: 'Fifth Element', age: 40, address: '202 Birch St', phone: '567-890-1234', email: 'fifth@example.com', company: 'Company E', department: 'Dept 5', title: 'Architect', startDate: '2016-05-30' },
            { id: 6, name: 'Sixth Element', age: 27, address: '303 Cedar St', phone: '678-901-2345', email: 'sixth@example.com', company: 'Company F', department: 'Dept 6', title: 'Engineer', startDate: '2015-06-05' },
            { id: 7, name: 'Seventh Element', age: 32, address: '404 Spruce St', phone: '789-012-3456', email: 'seventh@example.com', company: 'Company G', department: 'Dept 7', title: 'Consultant', startDate: '2014-07-10' },
            { id: 8, name: 'Eighth Element', age: 29, address: '505 Elm St', phone: '890-123-4567', email: 'eighth@example.com', company: 'Company H', department: 'Dept 8', title: 'Specialist', startDate: '2013-08-15' },
            { id: 9, name: 'Ninth Element', age: 31, address: '606 Willow St', phone: '901-234-5678', email: 'ninth@example.com', company: 'Company I', department: 'Dept 9', title: 'Coordinator', startDate: '2012-09-20' },
            { id: 10, name: 'Tenth Element', age: 33, address: '707 Aspen St', phone: '012-345-6789', email: 'tenth@example.com', company: 'Company J', department: 'Dept 10', title: 'Administrator', startDate: '2011-10-25' },
        ],
        theme: [
            { displayName: 'ID', key: 'id' },
            { displayName: 'Name', key: 'name' },
            { displayName: 'Age', key: 'age' },
            { displayName: 'Address', key: 'address' },
            { displayName: 'Phone', key: 'phone' },
            { displayName: 'Email', key: 'email' },
            { displayName: 'Company', key: 'company' },
            { displayName: 'Department', key: 'department' },
            { displayName: 'Title', key: 'title' },
            { displayName: 'Start Date', key: 'startDate' },
        ]
    }
};
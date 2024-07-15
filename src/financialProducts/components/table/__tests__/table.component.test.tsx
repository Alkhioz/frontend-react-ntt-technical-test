import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { Table } from '../table.component';

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


describe('Table component test', () => {
    it('The element gets rendered with the proper text', () => {
        const { container } = render(
            <Table<MockListDataProps>
                data={[
                    { id: 1, name: 'First Element', age: 25, address: '123 Main St', phone: '123-456-7890', email: 'first@example.com', company: 'Company A', department: 'Dept 1', title: 'Developer', startDate: '2020-01-01' },
                    { id: 2, name: 'Second Element', age: 30, address: '456 Oak St', phone: '234-567-8901', email: 'second@example.com', company: 'Company B', department: 'Dept 2', title: 'Manager', startDate: '2019-02-15' },
                ]}
                theme={[
                    { displayName: 'ID', key: 'id' },
                    { displayName: 'Name', key: 'name' },
                    { displayName: 'Age', key: 'age' },
                    { displayName: 'Address', key: 'address' },
                    { displayName: 'Phone', key: 'phone' },
                    { displayName: 'Email', key: 'email' },
                    { displayName: 'Company', key: 'company' },
                    { displayName: 'Department', key: 'department' },
                    { displayName: 'Title', key: 'title' },
                    { 
                        display: <></>,
                        render: (row)=><>{row.startDate}</>
                    },
                ]}
            />
        );
        expect(container.querySelector('table')).toBeInTheDocument();
    });
});
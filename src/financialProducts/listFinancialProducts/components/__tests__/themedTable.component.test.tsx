import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { ThemedTableWithSearchLimitCard } from '../themedTable.component';
import { FinancialProduct } from '../../../domain/financialProduct.entity';

const theme = [
    { displayName: 'ID', key: 'id' },
    { displayName: 'Name', key: 'name' },
    { displayName: 'Description', key: 'description' },
    { displayName: 'Logo', key: 'logo' },
    { displayName: 'Date Release', key: 'date_release' },
    { 
        display: <></>,
        render: (row:FinancialProduct)=><>{row.date_revision}</>
    }
];

const data = [
    {
        id: '1',
        name: 'Savings Account',
        description: 'A secure account to save money with interest.',
        logo: 'logo1.png',
        date_release: '2021-01-01',
        date_revision: '2021-06-01',
    },
    {
        id: '2',
        name: 'Checking Account',
        description: 'An account for daily transactions with no interest.',
        logo: 'logo2.png',
        date_release: '2021-02-01',
        date_revision: '2021-07-01',
    },
];


describe('ThemedTable component test', () => {

    it('The element renders with data', () => {

        const { getByText } = render(
            <ThemedTableWithSearchLimitCard
                configuration={{
                    theme,
                    actionButton: <></>
                }}
                data={data}
            />
        );
        expect(getByText('Savings Account')).toBeInTheDocument();
    });

    it('The element renders without data', () => {
        const { container } = render(
            <ThemedTableWithSearchLimitCard
                data={data}
            />
        );
        expect(container.querySelector('table')).toBeInTheDocument();
    });

    
});
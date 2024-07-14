import { Header } from "../components/header/header.component";
import { ThemedTableWithSearchLimitCard } from "./components/themedTable.component";
import './listFinancialProducts.container.css';

const theme = [
    { displayName: 'ID', key: 'id' },
    { displayName: 'Name', key: 'name' },
    { displayName: 'Description', key: 'description' },
    { displayName: 'Logo', key: 'logo' },
    { displayName: 'Date Release', key: 'date_release' },
    { displayName: 'Date Revision', key: 'date_revision' },
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
    {
        id: '3',
        name: 'Credit Card',
        description: 'A card to borrow funds with an interest rate.',
        logo: 'logo3.png',
        date_release: '2021-03-01',
        date_revision: '2021-08-01',
    },
    {
        id: '4',
        name: 'Mortgage',
        description: 'A loan to purchase real estate property.',
        logo: 'logo4.png',
        date_release: '2021-04-01',
        date_revision: '2021-09-01',
    },
    {
        id: '5',
        name: 'Personal Loan',
        description: 'A loan for personal expenses with a fixed interest rate.',
        logo: 'logo5.png',
        date_release: '2021-05-01',
        date_revision: '2021-10-01',
    },
    {
        id: '6',
        name: 'Investment Account',
        description: 'An account for investing in stocks and bonds.',
        logo: 'logo6.png',
        date_release: '2021-06-01',
        date_revision: '2021-11-01',
    },
    {
        id: '7',
        name: 'Retirement Account',
        description: 'An account to save for retirement with tax benefits.',
        logo: 'logo7.png',
        date_release: '2021-07-01',
        date_revision: '2021-12-01',
    },
    {
        id: '8',
        name: 'Health Savings Account',
        description: 'A tax-advantaged account for medical expenses.',
        logo: 'logo8.png',
        date_release: '2021-08-01',
        date_revision: '2022-01-01',
    },
    {
        id: '9',
        name: 'Student Loan',
        description: 'A loan to cover education-related expenses.',
        logo: 'logo9.png',
        date_release: '2021-09-01',
        date_revision: '2022-02-01',
    },
    {
        id: '10',
        name: 'Auto Loan',
        description: 'A loan to finance the purchase of a vehicle.',
        logo: 'logo10.png',
        date_release: '2021-10-01',
        date_revision: '2022-03-01',
    },
    {
        id: '11',
        name: 'Business Loan',
        description: 'A loan to support business operations and growth.',
        logo: 'logo11.png',
        date_release: '2021-11-01',
        date_revision: '2022-04-01',
    },
    {
        id: '12',
        name: 'Certificate of Deposit',
        description: 'A savings certificate with a fixed interest rate.',
        logo: 'logo12.png',
        date_release: '2021-12-01',
        date_revision: '2022-05-01',
    },
    {
        id: '13',
        name: 'Money Market Account',
        description: 'A high-yield savings account with check-writing privileges.',
        logo: 'logo13.png',
        date_release: '2022-01-01',
        date_revision: '2022-06-01',
    },
    {
        id: '14',
        name: 'Forex Trading Account',
        description: 'An account for trading foreign currencies.',
        logo: 'logo14.png',
        date_release: '2022-02-01',
        date_revision: '2022-07-01',
    },
    {
        id: '15',
        name: 'Cryptocurrency Wallet',
        description: 'A digital wallet for storing cryptocurrencies.',
        logo: 'logo15.png',
        date_release: '2022-03-01',
        date_revision: '2022-08-01',
    }
];

export function ListFinancialProductContainer() {

    return (
        <div className="listFinancialProducts">
            <Header />
            <div className="tableComponentContainer">
                <ThemedTableWithSearchLimitCard
                    configuration={{
                        theme
                    }}
                    data={data}
                />
            </div>
        </div>
    );
}
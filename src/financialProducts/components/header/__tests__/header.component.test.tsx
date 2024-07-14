import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { Header } from '../header.component';
describe('Header component test', () => {
    it('The header gets rendered', () => {
        const { getByText } = render(
            <Header />
        );
        expect(getByText('BANCO')).toBeInTheDocument();
    });
});
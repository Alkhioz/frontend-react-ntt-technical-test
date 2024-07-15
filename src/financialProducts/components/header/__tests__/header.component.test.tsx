import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react";
import { Header } from '../header.component';
import { BrowserRouter } from 'react-router-dom';
describe('Header component test', () => {
    it('The header gets rendered', () => {
        const { getByText,  } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(getByText('BANCO')).toBeInTheDocument();
        fireEvent.click(getByText('BANCO'));
    });
});
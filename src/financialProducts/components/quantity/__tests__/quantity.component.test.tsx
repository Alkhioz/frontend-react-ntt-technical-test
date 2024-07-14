import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { Quantity } from '../quantity.component';
describe('Quantity component test', () => {
    it('The element gets rendered with the proper text', () => {
        const { getByText } = render(
            <Quantity quantity={15} />
        );
        expect(getByText('15 Resultados')).toBeInTheDocument();
    });
});
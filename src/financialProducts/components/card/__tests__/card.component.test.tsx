import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { Card } from '../card.component';
describe('Card component test', () => {
    it('The card gets rendered', () => {
        const { getByText } = render(
            <Card>
                <div>BANCO</div>
            </Card>
        );
        expect(getByText('BANCO')).toBeInTheDocument();
    });
});
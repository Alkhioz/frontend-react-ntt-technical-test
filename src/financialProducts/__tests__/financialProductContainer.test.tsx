import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { FinancialProductContainer } from "../financialProductContainer";
describe('Financial Product Container', () => {
    it('The container renders the provided text', () => {
        const { getAllByText } = render(
            <FinancialProductContainer />
        );
        getAllByText('Financial Product').forEach(elm => {
            expect(elm).toBeInTheDocument();
        });
    });
});
FinancialProductContainer
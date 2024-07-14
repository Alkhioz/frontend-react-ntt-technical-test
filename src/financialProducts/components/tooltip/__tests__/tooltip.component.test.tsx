import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { Tooltip } from '../tooltip.component';
describe('Tooltip component test', () => {
    it('The Tooltip gets rendered', () => {
        const { getByText } = render(
            <Tooltip
                message='Test tooltip'
            />
        );
        expect(getByText('i')).toBeInTheDocument();
    });
});
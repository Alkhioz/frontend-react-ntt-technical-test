import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Button } from '../button.component';

describe('Button Component', () => {
    it('The button renders the provided text', () => {
        const text = 'Hello, world!';
        const { getByText } = render(
            <Button variant='primary'>
                {text}
            </Button>
        );
        expect(getByText(text)).toBeInTheDocument();
    });
    it('The primary button has the correct class', () => {
        const { getByText } = render(
            <Button variant='primary'>Continue</Button>
        );
        const buttonElement = getByText('Continue');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('button');
        expect(buttonElement).toHaveClass('primary');
    });
    it('The secondary button has the correct class', () => {
        const { getByText } = render(
            <Button variant='secondary'>Continue</Button>
        );
        const buttonElement = getByText('Continue');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('button');
        expect(buttonElement).toHaveClass('secondary');
    });
});
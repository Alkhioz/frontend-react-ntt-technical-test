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
    it('The primary button has the correct color', () => {
       
        const { getByText } = render(
            <Button variant='primary'>Continue</Button>
        );
        const buttonElement = getByText('Continue');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle('background-color: #FDD835');
        expect(buttonElement).toHaveStyle('color: #0e184aff');
    });
    it('The secondary button has the correct color', () => {
       
        const { getByText } = render(
            <Button variant='secondary'>Continue</Button>
        );
        const buttonElement = getByText('Continue');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveStyle('background-color: #E0E0E0');
        expect(buttonElement).toHaveStyle('color: #0e184aff');
    });
});
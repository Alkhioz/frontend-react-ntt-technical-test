import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { Modal, ModalProps } from '../modal.component';

describe('Modal Component Test', () => {

    it('The modal renders the provided text', () => {
        document.body.innerHTML = '<div id="modal_dom_element"></div>';
        const buttons = [
            {
                text: "button1",
                action: () => { },
                variant: 'primary'
            },
            {
                text: "button2",
                action: () => { },
                variant: 'secondary'
            },
        ] as ModalProps['buttons'];
        const message = 'Test message';
        const { getByText } = render(
            <Modal
                message={message}
                open={true}
                buttons={buttons}
            />
        );
        expect(getByText(message)).toBeInTheDocument();
    });

    it('Renders no buttons when buttons prop is undefined', () => {
        document.body.innerHTML = '<div id="modal_dom_element"></div>';
        const { container } = render(<Modal
            message='Test message'
            open={true}
        />);
        expect(container.querySelectorAll('button').length).toBe(0);
    });

    it('Doesnt render when open=false', () => {
        document.body.innerHTML = '<div id="modal_dom_element"></div>';
        const { container } = render(<Modal
            message='Test message'
            open={false}
        />);
        expect(container.childNodes.length).toBe(0);
    });

});
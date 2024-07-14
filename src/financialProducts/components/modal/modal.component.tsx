import React, { useRef, ComponentProps } from "react";
import { createPortal } from "react-dom";
import "./modal.component.css";
import { Button } from "../button/button.component";

export type ModalProps = {
    message: string;
    open: boolean;
    buttons?: {
        text: string,
        action: () => void,
        variant: ComponentProps<typeof Button>['variant'],
    }[];
}

export function ModalBody({ open, message, buttons }: ModalProps) {
    return (
        open
            ? <div className="modalContainer">
                <div className="modalCard">
                    <div className="modalMessage">
                        {message}
                    </div>
                    <div className="modalButtons">
                        {
                            buttons?.map((button, index) => (
                                <React.Fragment key={index}>
                                    <Button
                                        variant={button.variant}
                                        onClick={button.action}
                                    >
                                        {button.text}
                                    </Button>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
            : null
    );
}

export function Modal({ open, message, buttons }: ModalProps) {
    const element = useRef(document.getElementById('modal_dom_element'));
    return (<>
        {
            (!element?.current)
                ? null :
                createPortal(
                    <ModalBody
                        open={open}
                        message={message}
                        buttons={buttons}
                    />, element?.current
                )
        }
    </>);
}
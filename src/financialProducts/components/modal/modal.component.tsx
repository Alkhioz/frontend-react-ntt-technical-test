import { useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.component.css";

type ModalProps = {
    // children: React.ReactNode;
    open: boolean;
}

function ModalBody({ open }: ModalProps) {
    return (
        <>
            {
                open
                    ? <div className="modal">
                        <div>MODAL</div>
                    </div>
                    : null
            }
        </>
    );
}

export function Modal({ open }: ModalProps) {
    const element = useRef(document.getElementById('modal_dom_element'));
    return (<>
        {
            (!element?.current)
                ? null :
                createPortal(
                    <ModalBody
                        open={open}
                    />,
                    element?.current
                )
        }
    </>);
}
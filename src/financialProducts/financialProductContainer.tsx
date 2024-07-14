import { Button } from "./components/button/button.component";
import { Input } from "./components/input/input.component";
import { minMaxLength } from "../utilities/minMaxLength.utility";
import { Modal } from "./components/modal/modal.component";
import { useState } from "react";

export function FinancialProductContainer() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <Button
                variant='primary'
                onClick={()=>setOpenModal(true)}
            >Confirmar</Button>
            <Button
                variant='secondary'
            >Cancelar</Button>
            <Button
                variant='primary'
                disabled
            >Confirmar</Button>
            <Button
                variant='secondary'
                disabled
            >Cancelar</Button>
            <Input id="1" labelText="ID" validationRules={[
                {
                    action: minMaxLength(3, 20),
                    errorText: 'Invalid ID'
                },
            ]} />
            <Input id="1" labelText="Nombre" />
            <Input id="1" labelText="Descripcion" />
            <Input id="1" labelText="Logo" />
            <Modal 
                open={openModal}
                message='¿Estas seguro de eliminar el producto {titulo-del-producto}?'
                buttons={[
                    {
                        text: 'Cancelar',
                        action: ()=>setOpenModal(false),
                        variant: 'secondary',
                    },
                    {
                        text: 'Continuar',
                        action: ()=>setOpenModal(false),
                        variant: 'primary',
                    },
                ]}
            />
        </div>
    );
}
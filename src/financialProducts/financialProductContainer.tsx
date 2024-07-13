import { Button } from "../components/button/button.component";

export function FinancialProductContainer(){
    return (
        <>
        <Button
            variant='primary'
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
        </>
    );
}
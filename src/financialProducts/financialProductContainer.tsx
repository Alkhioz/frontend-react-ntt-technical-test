import { Button } from "../components/button/button.component";
import { Input } from "../components/input/input.component";
import { minMaxLength } from "../utilities/minMaxLength.utility";

export function FinancialProductContainer(){
    return (
        <div
            style={{
                width: '100%',
            }}
        >
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
        <Input id="1" labelText="ID" validationRules={[
            {
                action:  minMaxLength(3, 20),
                errorText: 'Invalid ID'
            },
        ]} />
        <Input id="1" labelText="Nombre" />
        <Input id="1" labelText="Descripcion" />
        <Input id="1" labelText="Logo" />
        </div>
    );
}
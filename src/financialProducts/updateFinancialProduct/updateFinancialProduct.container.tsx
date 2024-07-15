import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/header/header.component";
import './updateFinancialProduct.container.css';
import { Card } from "../components/card/card.component";
import { Input, InputHandle } from "../components/input/input.component";
import { minMaxLength } from "../../utilities/minMaxLength.utility";
import { useEffect, useRef } from "react";
import { Button } from "../components/button/button.component";
import { useAddProduct } from "../hooks/useAddProduct.hook";
import { FinancialProduct } from "../domain/financialProduct.entity";

export function UpdateFinancialProductContainer() {
    const navigate = useNavigate();
    const { id } = useParams<{
        id: string,
    }>();
    const { add, loading, error } = useAddProduct();
    const decodedId = id ? atob(id) : null;
    const formId = useRef<HTMLInputElement>(null);
    const formName = useRef<HTMLInputElement>(null);
    const formDescription = useRef<HTMLInputElement>(null);
    const formLogo = useRef<HTMLInputElement>(null);
    const formDateRelease = useRef<HTMLInputElement>(null);
    const formDateRevision = useRef<HTMLInputElement>(null);
    const inputRefs = useRef<(InputHandle | null)[]>([]);

    useEffect(()=>{
        if(decodedId && formId.current) {
            formId.current.value = decodedId;
        }
    }, [decodedId, formId.current]);

    const resetForm = () => {
        if (formId.current && !decodedId) formId.current.value = '';
        if (formName.current) formName.current.value = '';
        if (formDescription.current) formDescription.current.value = '';
        if (formLogo.current) formLogo.current.value = '';
        if (formDateRelease.current) formDateRelease.current.value = '';
        if (formDateRevision.current) formDateRevision.current.value = '';
        inputRefs.current.forEach(ref => {
            if (ref) ref.resetError();
        });
    }

    const sendForm = async () => {
        const hasErrors = inputRefs.current.some(ref => {
            if (ref) return ref.hasError();
            return false;
        });
        if (hasErrors) return false;
        const id = formId.current?.value;
        const name = formName.current?.value;
        const description = formDescription.current?.value;
        const logo = formLogo.current?.value;
        const dateRelease = formDateRelease.current?.value;
        const dateRevision = formDateRevision.current?.value;
        if (!id || !name || !description || !logo || !dateRelease || !dateRevision) return false;
        const body = {
            id: id,
            name: name,
            description: description,
            logo: logo,
            date_release: dateRelease,
            date_revision: dateRevision,
        } as FinancialProduct;
        await add(body);
        if(!loading && !error) navigate('/financialproduct');
    }

    const isEditing = !!decodedId;
    const isRequired = (str: string) => {
        return str?.length > 0;
    }
    return (
        <div className="updateFinancialProduct">
            <Header />
            <div className="formContainer">
                <Card>
                    <h1 className="form-title">Formulario de {isEditing ? 'Actualización' : 'Registro'}</h1>
                    <div className="form-elements">
                        <Input
                            disabled={isEditing}
                            id="id"
                            labelText="ID"
                            validationRules={[
                                {
                                    action: isRequired,
                                    errorText: 'ID es requerido'
                                },
                                {
                                    action: minMaxLength(3, 10),
                                    errorText: 'ID no valido'
                                }
                            ]}
                            elementRef={formId}
                            ref={el => inputRefs.current[0] = el}
                        />
                        <Input
                            id="name"
                            labelText="Nombre"
                            validationRules={[
                                {
                                    action: isRequired,
                                    errorText: 'Nombre es requerido'
                                },
                                {
                                    action: minMaxLength(5, 100),
                                    errorText: 'Nombre no valido'
                                }
                            ]}
                            elementRef={formName}
                        />
                        <Input
                            id="description"
                            labelText="Descripción"
                            validationRules={[
                                {
                                    action: isRequired,
                                    errorText: 'Descripción es requerida'
                                },
                                {
                                    action: minMaxLength(10, 200),
                                    errorText: 'Descripción no valida'
                                }
                            ]}
                            elementRef={formDescription}
                        />
                        <Input
                            id="logo"
                            labelText="Logo"
                            validationRules={[
                                {
                                    action: isRequired,
                                    errorText: 'Logo es requerido'
                                }
                            ]}
                            elementRef={formLogo}
                        />
                        <Input
                            id="date_release"
                            labelText="Fecha de liberación"
                            elementRef={formDateRelease}
                        />
                        <Input
                            id="date_revision"
                            labelText="Fecha de Revisión"
                            elementRef={formDateRevision}
                        />
                    </div>
                    <div className="formButtonContainer">
                        <div className="formButton">
                            <Button
                                disabled={loading}
                                variant="secondary"
                                onClick={resetForm}
                            >
                                Reiniciar
                            </Button>
                        </div>
                        <div className="formButton">
                            <Button
                                disabled={loading}
                                variant="primary"
                                onClick={sendForm}
                            >
                                Enviar
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
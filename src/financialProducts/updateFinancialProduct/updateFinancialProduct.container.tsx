import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/header/header.component";
import './updateFinancialProduct.container.css';
import { Card } from "../components/card/card.component";
import { Input, InputHandle } from "../components/input/input.component";
import { minMaxLength } from "../../utilities/minMaxLength.utility";
import { useEffect, useMemo, useRef } from "react";
import { Button } from "../components/button/button.component";
import { useAddProduct } from "../hooks/useAddProduct.hook";
import { FinancialProduct } from "../domain/financialProduct.entity";
import { useUpdateProduct } from "../hooks/useUpdateProduct.hook";
import { useCheckProductId } from "../hooks/useCheckId.hook";
import { addToDate } from "../../utilities/addToDate.utility";

export function UpdateFinancialProductContainer() {
    const navigate = useNavigate();
    const { body } = useParams<{
        body: string,
    }>();
    const decodedBody = useMemo(() => {
        if (!body) return null;
        try {
            const json = JSON.parse(atob(body));
            return json;
        } catch (error) {
            return null
        }
    }, [body]);

    const decodedId = decodedBody ? decodedBody.id : null;
    const { add, loading, error } = useAddProduct();
    const { update, loading: updateLoading, error: updateError } = useUpdateProduct();
    const { check, loading: checkLoading, error: checkError } = useCheckProductId();
    const formId = useRef<HTMLInputElement>(null);
    const formName = useRef<HTMLInputElement>(null);
    const formDescription = useRef<HTMLInputElement>(null);
    const formLogo = useRef<HTMLInputElement>(null);
    const formDateRelease = useRef<HTMLInputElement>(null);
    const formDateRevision = useRef<HTMLInputElement>(null);
    const inputRefs = useRef<(InputHandle | null)[]>([]);

    useEffect(() => {
        if (decodedBody) {
            if (formId.current) formId.current.value = decodedBody.id;
            if (formName.current) formName.current.value = decodedBody.name;
            if (formDescription.current) formDescription.current.value = decodedBody.description;
            if (formLogo.current) formLogo.current.value = decodedBody.logo;
            if (formDateRelease.current) formDateRelease.current.value = decodedBody.date_release;
            if (formDateRevision.current) formDateRevision.current.value = decodedBody.date_revision;
        }
    }, [decodedBody]);

    useEffect(() => {
        if (formDateRelease.current) {
            const today = new Date().toISOString().split('T')[0];
            formDateRelease.current.min = today;
        }
    }, []);

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
        if (isEditing) {
            await update(body);
            resetForm();
            if (
                !loading && !error && !updateLoading
                && !updateError && !checkLoading && !checkError
            ) navigate('/financialproduct');
        } else {
            const exists = await check(body.id);
            if (!exists) {
                await add(body);
                resetForm();
                if (
                    !loading && !error && !updateLoading
                    && !updateError && !checkLoading && !checkError
                ) navigate('/financialproduct');
            } else {
                inputRefs.current.find((elm) => elm?.id === 'id')?.setError('ID ya existe');
            }
        }
    }

    const updateRevisionDate = (value:string) => {
        if(value){
            const date = new Date(value);
            const newDate = addToDate(date, {years:1});
            if(formDateRevision.current) formDateRevision.current.value = newDate.toISOString().split('T')[0];
        }
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
                            type="date"
                            id="date_release"
                            labelText="Fecha de liberación"
                            elementRef={formDateRelease}
                            onChange={updateRevisionDate}
                        />
                        <Input
                            disabled
                            type="date"
                            id="date_revision"
                            labelText="Fecha de Revisión"
                            elementRef={formDateRevision}
                        />
                    </div>
                    <div className="formButtonContainer">
                        <div className="formButton">
                            <Button
                                disabled={loading || updateLoading || checkLoading}
                                variant="secondary"
                                onClick={resetForm}
                            >
                                Reiniciar
                            </Button>
                        </div>
                        <div className="formButton">
                            <Button
                                disabled={loading || updateLoading || checkLoading}
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
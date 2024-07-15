import { Button } from "../components/button/button.component";
import { Header } from "../components/header/header.component";
import { Tooltip } from "../components/tooltip/tooltip.component";
import { FinancialProduct } from "../domain/financialProduct.entity";
import { useListProducts } from "../hooks/useListProducts.hook";
import { ThemedTableWithSearchLimitCard } from "./components/themedTable.component";
import './listFinancialProducts.container.css';
import { Logo } from "../components/logo/logo.component";
import { useRef, useState } from "react";
import { Modal } from "../components/modal/modal.component";
import { useRemoveProduct } from "../hooks/useRemoveProduct.hook";
import { useNavigate } from "react-router-dom";

type DropDownProps = {
    children: React.ReactNode,
}

function Dropdown(props: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="contextMenu" onClick={() => { setIsOpen(!isOpen) }}>
                ⋮
            </button>
            {
                isOpen ? <div className="contextMenuElements">{props.children}</div> : null
            }
        </>
    )
}

export function ListFinancialProductContainer() {
    const navigate = useNavigate();
    const {
        data,
        loading,
        error,
        refetch,
    } = useListProducts();

    const {
        remove,
        loading: removeLoading,
        error: removeError,
    } = useRemoveProduct();

    const [show, setShow] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const id = useRef<string | null>(null);

    const handleDelete = (row: FinancialProduct) => {
        setMessage(`¿Estas seguro de eliminar el producto ${row.name}?`);
        id.current = row.id;
        setShow(true);
    }

    const theme = [
        {
            displayName: 'Logo',
            render: (row: FinancialProduct) => <Logo src={row.logo} />
        },
        {
            displayName: 'Nombre del Producto',
            key: 'name'
        },
        {
            display: (
                <div>
                    Descripción
                    <Tooltip message="Descripción" />
                </div>
            )
            ,
            render: (row: FinancialProduct) => <>{row.description}</>,
        },
        {
            display: (
                <div>
                    Fecha de liberación
                    <Tooltip message="Fecha de liberación" />
                </div>
            )
            ,
            render: (row: FinancialProduct) => <>{row.date_release}</>,
        },
        {
            display: (
                <div>
                    Fecha de reestructuración
                    <Tooltip message="Fecha de reestructuración" />
                </div>
            )
            ,
            render: (row: FinancialProduct) => <>{row.date_revision}</>,
        },
        {
            display: <></>,
            render: (row: FinancialProduct) => (
                <>
                    <Dropdown>
                        <button
                            className="contextMenuDeleteButton"
                            onClick={() => {
                                handleDelete(row);
                            }}
                        >delete</button>
                        <button
                            className="contextMenuEditButton"
                            onClick={() => {
                                navigate(`/financialproduct/edit/${encodeURIComponent(btoa(JSON.stringify(row)))}`);
                            }}
                        >Edit</button>
                    </Dropdown>
                </>
            ),
        },
    ];

    return (
        <div className="listFinancialProducts">
            <Header />
            <div className="tableComponentContainer">
                {
                    (!loading && !error && data && !removeLoading && !removeError) ?
                        <ThemedTableWithSearchLimitCard
                            configuration={{
                                theme,
                                actionButton: (
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            navigate('/financialproduct/add');
                                        }}
                                    >
                                        Agregar
                                    </Button>
                                )
                            }}
                            data={data}
                        />
                        : null
                }
            </div>
            <Modal
                open={show}
                message={message}
                buttons={[
                    {
                        variant: 'secondary',
                        action: () => {
                            setShow(false);
                        },
                        text: 'Cancelar'
                    }, {
                        variant: 'primary',
                        action: async () => {
                            if (id.current) {
                                setShow(false);
                                await remove(id.current);
                                await refetch();
                            }
                        },
                        text: 'Continuar'
                    }
                ]}
            />
        </div>
    );
}
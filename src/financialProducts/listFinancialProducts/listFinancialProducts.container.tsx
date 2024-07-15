import { Button } from "../components/button/button.component";
import { Header } from "../components/header/header.component";
import { Tooltip } from "../components/tooltip/tooltip.component";
import { FinancialProduct } from "../domain/financialProduct.entity";
import { useListProducts } from "../hooks/useListProducts.hook";
import { ThemedTableWithSearchLimitCard } from "./components/themedTable.component";
import './listFinancialProducts.container.css';
import { Logo } from "../components/logo/logo.component";

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
];

export function ListFinancialProductContainer() {
    const {
        data,
        loading,
        error,
    } = useListProducts();
    return (
        <div className="listFinancialProducts">
            <Header />
            <div className="tableComponentContainer">
                {
                    (!loading && !error && data) ?
                        <ThemedTableWithSearchLimitCard
                            configuration={{
                                theme,
                                actionButton: (
                                    <Button
                                        variant="primary"
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
        </div>
    );
}
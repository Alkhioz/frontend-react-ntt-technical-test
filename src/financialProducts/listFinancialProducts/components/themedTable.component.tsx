import { Card } from "../../components/card/card.component";
import { LimitResults } from "../../components/limitResults/limitResults.component";
import { Search } from "../../components/search/search.component";
import { Table, ThemeType } from "../../components/table/table.component";
import { DataType } from "../../domain/datatype.type";
import { FinancialProduct } from "../../domain/financialProduct.entity";

type ThemedTableProps<T, L> = {
    data: T[];
    configuration?: L;
}

type AdditionalProps<T> = {
    theme: ThemeType<T>,
    actionButton: React.ReactNode,
}

export function ThemedTable<T, L extends DataType<L>>(
    props: ThemedTableProps<T, L>
) {
    return (
        <Table<T>
            data={props.data}
            theme={
                (props.configuration && 'theme' in props.configuration)
                    ? (props.configuration.theme as ThemeType<T>)
                    : []
            }
        />
    );
}

export function ThemedCard<T extends DataType<T>, L>(Component: React.ComponentType<ThemedTableProps<T, L>>) {
    return function WrappedComponent(props: ThemedTableProps<T, L>) {
        const data = props?.data;
        const configuration = props?.configuration;
        return (
            <Card>
                <Component {...{ data, configuration }} />
            </Card>
        );
    }
}

export const TableWithLimit = LimitResults(ThemedTable);
export const TableWithLimitCard = ThemedCard(TableWithLimit);

export const ThemedTableWithSearchLimitCard = Search<FinancialProduct, AdditionalProps<FinancialProduct>>(TableWithLimitCard);
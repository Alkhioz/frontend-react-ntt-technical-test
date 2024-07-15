import { useParams } from "react-router-dom";
import { Header } from "../components/header/header.component";
import './updateFinancialProduct.container.css';

export function UpdateFinancialProductContainer() {
    const { id } = useParams<{
        id: string,
    }>();
    return (
        <div className="updateFinancialProduct">
            <Header />
            {
                id ? <>EDIT {atob(id)}</>
                : <>ADD</>
            }
        </div>
    );
}
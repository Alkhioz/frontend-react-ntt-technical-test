import { ListFinancialProductContainer } from "./listFinancialProducts/listFinancialProducts.container";
import { Routes, Route, Navigate } from 'react-router-dom'
import { UpdateFinancialProductContainer } from "./updateFinancialProduct/updateFinancialProduct.container";


export function FinancialProductRoute() {
    return (
        <Routes>
            <Route path='financialproduct' element={<ListFinancialProductContainer />} />
            <Route path='financialproduct/add' element={<UpdateFinancialProductContainer />} />
            <Route path='financialproduct/edit/:body' element={<UpdateFinancialProductContainer />} />
            <Route
                path="*"
                element={<Navigate to="financialproduct" replace />}
            />
        </Routes>
    );
}
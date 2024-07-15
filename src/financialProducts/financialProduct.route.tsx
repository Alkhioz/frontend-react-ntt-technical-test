import { ListFinancialProductContainer } from "./listFinancialProducts/listFinancialProducts.container";

import { Routes, Route, Navigate } from 'react-router-dom'

export function FinancialProductRoute() {
    return (
        <Routes>
            <Route path='/listfinancialproducts' element={<ListFinancialProductContainer />} />
            <Route
                path="*"
                element={<Navigate to="/listfinancialproducts" replace />}
            />
        </Routes>
    );
}
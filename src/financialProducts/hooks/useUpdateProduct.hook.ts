import { useState } from "react";
import { financialProductsImpl } from "../services/financialProduct.service";
import { FinancialProduct } from "../domain/financialProduct.entity";

export function useUpdateProduct() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const update = async (body:FinancialProduct) => {
        try {
            setLoading(true);
            await financialProductsImpl.updateProduct(body);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    return { update, loading, error };
}
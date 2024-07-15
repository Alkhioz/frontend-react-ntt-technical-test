import { useState } from "react";
import { financialProductsImpl } from "../services/financialProduct.service";
import { FinancialProduct } from "../domain/financialProduct.entity";

export function useAddProduct() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const add = async (body:FinancialProduct) => {
        try {
            setLoading(true);
            await financialProductsImpl.addProduct(body);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    return { add, loading, error };
}
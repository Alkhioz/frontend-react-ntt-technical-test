import { useState } from "react";
import { financialProductsImpl } from "../services/financialProduct.service";

export function useRemoveProduct() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const remove = async (id:string) => {
        try {
            setLoading(true);
            await financialProductsImpl.deleteProduct(id);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    return { remove, loading, error };
}
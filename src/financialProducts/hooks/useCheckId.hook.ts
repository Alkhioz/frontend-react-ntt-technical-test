

import { useState } from "react";
import { financialProductsImpl } from "../services/financialProduct.service";

export function useCheckProductId() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const check = async (id:string) => {
        try {
            setLoading(true);
            const data = await financialProductsImpl.checkId(id);
            setLoading(false);
            return data;
        } catch (error) {
            setError(error);
            setLoading(false);
            return false;
        }
    }

    return { check, loading, error };
}
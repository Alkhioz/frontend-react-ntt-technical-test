import { useEffect, useState } from "react";
import { financialProductsImpl } from "../services/getProducts.service";
import { FinancialProduct } from "../domain/financialProduct.entity";

export function useListProducts() {
    const [data, setData] = useState<FinancialProduct[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await financialProductsImpl.getProducts();
                setData(products);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return { data, loading, error };
}
import { FinancialProduct } from "../domain/financialProduct.entity";

class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request(endpoint: string, options?: RequestInit) {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return await response.json();
    }

    public async getProducts():Promise<FinancialProduct[]> {
        const {data} =  await this.request('/bp/products');
        return data;
    }

    public async deleteProduct(id:string) {
        const {data} =  await this.request(`/bp/products/${id}`, {
            method: 'delete',
        });
        return data;
    }

    
    public async addProduct(body: FinancialProduct) {
        const {data} =  await this.request(`/bp/products`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return data;
    }

}

export const financialProductsImpl = new ApiService('http://localhost:3002');
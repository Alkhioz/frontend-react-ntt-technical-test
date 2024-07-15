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

    
    public async updateProduct(body: FinancialProduct) {
        const {id, ...rest} = body;
        const {data} =  await this.request(`/bp/products/${id}`, {
            method: 'put',
            body: JSON.stringify(rest),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return data;
    }

    public async checkId(id: string): Promise<boolean> {
        const response = await fetch(`${this.baseUrl}/bp/products/verification/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const status = await response.text();
        return  status === 'true';
    }

}

export const financialProductsImpl = new ApiService('http://localhost:3002');
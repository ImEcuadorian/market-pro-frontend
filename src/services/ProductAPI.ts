import api from "../lib/axios.ts";
import {isAxiosError} from "axios";
import {DataProductDetail, DataProducts, Product, ProductDetailSchema, ProductsSchema} from "../types/product";

export const getAllProducts = async () => {
    try {
        const {data} = await api.get<DataProducts>("/products");
        const response = ProductsSchema.safeParse(data.data);
        if (response.success) {
            return response.data;
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data);
        }
    }

}

export const getProductById = async (id: Product["id"]) => {
    try {
        const {data} = await api.get<DataProductDetail>(`/products/${id}`);
        const response = ProductDetailSchema.safeParse(data.data);
        if (response.success) {
            return response.data;
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data);
        }
    }

}

export const deleteProductById = async (id: Product["id"]) => {
    try {
        const {data} = await api.delete(`/products/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data);
        }
    }

}

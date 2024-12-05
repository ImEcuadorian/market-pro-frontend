import {z} from "zod";

export const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    categoryId: z.string(),
    imagesUrl: z.array(z.string()),
    status: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
export const ProductsSchema = z.array(ProductSchema);

export type Products = z.infer<typeof ProductsSchema>;
export const CategorySchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;

export const ProductDetailSchema = ProductSchema.extend({
    stock: z.number(),
    sku: z.string(),
    brand: z.string(),
    weight: z.string(),
    color: z.string(),
    madeIn: z.string(),
    manufacturer: z.string(),
    category: CategorySchema
});

export type ProductDetail = z.infer<typeof ProductDetailSchema>;

export const DataProductsSchema = z.object({
    status: z.string(),
    message: z.string(),
    data: ProductsSchema,
    errors: z.record(z.string()).nullable(),
    meta: z.record(z.string()).nullable(),
})

export type DataProducts = z.infer<typeof DataProductsSchema>;
export const DataProductDetailSchema = z.object({
    status: z.string(),
    message: z.string(),
    data: ProductDetailSchema,
    errors: z.record(z.string()).nullable(),
    meta: z.record(z.string()).nullable(),
})

export type DataProductDetail = z.infer<typeof DataProductDetailSchema>;
export type ProductFormData = Omit<ProductDetail, "id" | "category">

import { useTranslation } from "react-i18next";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProductFormData } from "../../../types/product";

type ProductFormProps = {
    register: UseFormRegister<ProductFormData>;
    errors: FieldErrors<ProductFormData>;
}
const ProductForm = ({ register, errors }: ProductFormProps) => {

    const { t } = useTranslation();

    return (
            <>
                <div className="mb-5 space-y-3">
                    <label
                            className="text-sm font-bold"
                            htmlFor="name"
                    >
                        {t("product.form.name.label")}
                    </label>
                    <input
                            id="name"
                            type="text"
                            className="w-full p-3  border border-gray-200"
                            placeholder={t("product.form.name.placeholder")}
                            {
                                ...register("name", {
                                    required: {
                                        value: true,
                                        message: t("product.form.name.required")
                                    },
                                    pattern: /^[a-zA-Z0-9]+$/
                                })
                            }
                            {
                                ...errors.name && (
                                        <span>{errors.name.message}</span>
                                )
                            }
                    />
                </div>
                <div className="mb-5 space-y-3">
                    <label
                            className="text-sm font-bold"
                            htmlFor="description"
                    >
                        {t("product.form.description.label")}
                    </label>
                    <textarea
                            id="description"
                            type="text"
                            className="w-full p-3  border border-gray-200"
                            placeholder={t("product.form.description.placeholder")}
                            {
                                ...register("description", {
                                    required: {
                                        value: true,
                                        message: t("product.form.description.required")
                                    },
                                    pattern: /^[a-zA-Z0-9]+$/
                                })
                            }
                            {
                                ...errors.description && (
                                        <span>{errors.description.message}</span>
                                )
                            }
                    />
                </div>
                <div className="mb-5 space-y-3">
                    <label
                            className="text-sm font-bold"
                            htmlFor="price"
                    >
                        {t("product.form.price.label")}
                    </label>
                    <input
                            id="price"
                            type="number"
                            className="w-full p-3  border border-gray-200"
                            placeholder={t("product.form.price.placeholder")}
                            {
                                ...register("price", {
                                    required: {
                                        value: true,
                                        message: t("product.form.price.required")
                                    }
                                })
                            }
                            {
                                ...errors.price && (
                                        <span>{errors.price.message}</span>
                                )
                            }
                    />
                </div>
                <div className="mb-5 space-y-3">
                    <label
                            className="text-sm font-bold"
                            htmlFor="stock"
                    >
                        {t("product.form.stock.label")}
                    </label>
                    <input
                            id="stock"
                            type="number"
                            className="w-full p-3  border border-gray-200"
                            placeholder={t("product.form.stock.placeholder")}
                            {
                                ...register("stock", {
                                    required: {
                                        value: true,
                                        message: t("product.form.stock.required")
                                    }
                                })
                            }
                            {
                                ...errors.stock && (
                                        <span>{errors.stock.message}</span>
                                )
                            }
                    />
                </div>
            </>
    );
};

export default ProductForm;

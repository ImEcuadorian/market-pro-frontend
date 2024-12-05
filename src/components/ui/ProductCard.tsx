import { Product } from "../../types/product";

type ProductCardProps = {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                        src={"#"}
                        alt={`${product.name}`}
                        className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">${product.price}</span>

                    </div>
                </div>
            </div>

    );
};

export default ProductCard;

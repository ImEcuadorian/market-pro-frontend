import {getAllProducts} from "../services/ProductAPI.ts";
import {useQuery} from "@tanstack/react-query";
import ProductCard from "../components/ui/ProductCard.tsx";


const DashboardView = () => {

    const {data, isLoading} = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    })

    if (isLoading) return <p>Cargando...</p>;

    if (!data) return (
            <p>No existe comu</p>
    )

    if (data) return (
            <>
                <div className="md:max-w-screen">
                    <h1>Dashboard</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {
                                data.length > 0 && (
                                        data.map((product) => (
                                                <ProductCard key={product.id} product={product}/>
                                        ))
                                )
                        }
                    </div>
                </div>
            </>
    )
};

export default DashboardView;

import { useLoaderData } from "react-router-dom";
import Product from "./SIngleProduct/Product";

const Products = () => {
    const products = useLoaderData();
    return (
        <div className="c_container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                products.map((product, idx) => <Product key={idx} product={product} />)
            }
            </div>
        </div>
    );
};

export default Products;
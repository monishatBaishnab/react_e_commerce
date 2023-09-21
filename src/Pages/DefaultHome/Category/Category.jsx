import { useLoaderData } from "react-router-dom";
import CategoryProduct from "../CategoryProduct/CategoryProduct";

const Category = () => {
    const categoryProducts = useLoaderData();
    // console.log(category);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {
                categoryProducts.map((product, idx) => <CategoryProduct key={idx} categoryProduct={product} />)
            }
        </div>
    );
};

export default Category;
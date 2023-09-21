import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import ProductDetails from "../Pages/Products/ProductDetails/ProductDetails";
import DefaultHome from "../Pages/DefaultHome/DefaultHome";
import Category from "../Pages/DefaultHome/Category/Category";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        children: [
            
            {
                path: '/',
                element: <DefaultHome />,
                loader: () => {
                    const categorys = fetch('https://fakestoreapi.com/products/categories');
                    return categorys;
                },
                children: [
                    {
                        path: '/',
                        element: <Category />,
                        loader: () => fetch(`https://fakestoreapi.com/products`)
                    },
                    {
                        path: '/categoryData/:category',
                        element: <Category />,
                        loader: ({params}) => fetch(`https://fakestoreapi.com/products/category/${params?.category}`)
                    }
                ]
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/products',
                element: <Products />,
                loader: async () => {
                    const res = await fetch('https://fakestoreapi.com/products');
                    return res;
                }
            },
            {
                path: '/products/:productId',
                element: <ProductDetails />,
                loader: async ({params}) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                    return res;
                }
            }
        ]
    }
])

export default route;
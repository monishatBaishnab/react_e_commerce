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
                loader: () => fetch('https://fakestoreapi.com/products/categories'),
                children: [
                    {
                        path: '/categoryData/:category',
                        element: <Category />,
                        loader: ({params}) => fetch(`https://fakestoreapi.com/products/category/${params.category}`)
                    }
                ]
            },
            {
                path: '/:category',
                element: <h2>Hello Demo</h2>,
                loader: ({params}) => params
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
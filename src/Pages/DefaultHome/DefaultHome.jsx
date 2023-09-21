import { Outlet, useLoaderData } from "react-router-dom";
import Button from "./Button";

const DefaultHome = () => {
    const categoirys = useLoaderData();
    
    return (
        <div className="c_container"> 
            <div className="flex items-center justify-center gap-3 border-b pb-3">
                {
                    categoirys.map((category, idx) => <Button key={idx} category={category} />)
                }
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default DefaultHome;
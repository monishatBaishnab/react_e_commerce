import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Loading from "../../Components/Loading";

const Home = () => {
    const navigation = useNavigation();
    console.log(<Outlet />)
    return (
        <div>
            <Navbar />
            {
                navigation.state === 'loading' ? <Loading /> : <Outlet /> 
            }
        </div>
    );
};

export default Home;
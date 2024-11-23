import NavBar from './Home/NavBar';
import Footer from './Home/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
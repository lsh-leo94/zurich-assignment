import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../common/header';
import Footer from '../common/footer';


const PrivateRoute = () => {
    const { auth } = useSelector((state) => state);
  
    if (!auth?.user_token || !auth?.user_id) {
        return <Navigate to="/unauthorized" />
    }

    // authorized so return child components
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
    ;
}

export default PrivateRoute;
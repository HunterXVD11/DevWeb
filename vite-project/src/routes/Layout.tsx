import { Outlet } from "react-router-dom";
import Header from '../components/Header';

const Layout = () => {
    return (
        <>
        <Header/>
        <div className="container mt-3">
            <Outlet/>
        </div>
        </>
        
    )
}
export default Layout;
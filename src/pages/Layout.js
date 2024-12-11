import NavigationMain from "../components/NavigationMain";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <>
            <NavigationMain/>

            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <Outlet/>
                    </div>
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Layout;
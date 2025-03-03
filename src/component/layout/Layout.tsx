import { Outlet } from "react-router-dom"
import HeaderWithoutLogin from "./HeaderWithoutLogin"
import Footer from "./Footer"

// type AuthLayoutProps = {
//     children: React.ReactNode
// }

const Layout = () => {
    return (
        <div className="auth-layout">
            <HeaderWithoutLogin />
            
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

// type AuthLayoutProps = {
//     children: React.ReactNode
// }

const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <Header />
            
            <Outlet />
            <Footer />
        </div>
    )
}

export default AuthLayout
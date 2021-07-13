import Footer from "./footer"
import Navbar from "./navbar"

export interface LayoutProps {
    
}
 
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return ( 
        <div className = "content">
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;
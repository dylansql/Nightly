import { Link } from "react-router-dom"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

export default function Layout({currentUser, children}) {
    return (
        <div className="layout">
            <Nav currentUser={currentUser} />
            <div className="layout-children">{children}</div>
            <Footer />
        </div>
    )
}

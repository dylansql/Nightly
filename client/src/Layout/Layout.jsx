import Nav from "../components/Nav/Nav"


export default function Layout({currentUser, children, handleLogout}) {
    return (
        <div className="layout">
            <Nav currentUser={currentUser} handleLogout={handleLogout} />
            <div className="layout-children">{children}</div>
            {/* <Footer /> */}
        </div>
    )
}

export default function SignOut(props) {
    const { handleLogout } = props

    return (
        <div>
            <h2>This is the Sign Out page</h2>
            <button onClick={handleLogout}>Yes</button>
            <button>No</button>
        </div>
    )
}
